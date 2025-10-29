# 🔒 Sicurezza - Focali

Questo documento descrive le misure di sicurezza implementate e le best practices da seguire.

## ✅ Misure di Sicurezza Implementate

### 1. **Gestione Chiavi API e Credenziali**
- ✅ Tutte le chiavi sensibili sono in variabili d'ambiente (`.env.local` locale, Netlify UI per production)
- ✅ `.env.local` è nel `.gitignore` (non viene mai committato su GitHub)
- ✅ Le chiavi PayPal client secret e service keys non sono mai esposte al frontend
- ✅ Supabase usa Row Level Security (RLS) policies

**Chiavi Usate:**
- `VITE_PAYPAL_CLIENT_ID` - Frontend (solo client ID pubblico, safe)
- `PAYPAL_CLIENT_SECRET` - Backend only (Netlify Functions)
- `SUPABASE_URL` - Backend only
- `SUPABASE_ANON_KEY` - Backend only (key pubblica ma con RLS)
- `RESEND_API_KEY` - Backend only

### 2. **PayPal Payment Flow**
- ✅ **Creazione ordine server-side**: `create-paypal-order.ts` gestisce tutto lato server
- ✅ **Client Secret mai esposto**: il client secret di PayPal rimane solo nelle Netlify Functions
- ✅ **Cattura pagamento server-side**: `capture-paypal-order.ts` valida e cattura il pagamento
- ✅ **Sandbox mode**: attualmente in modalità test, nessun pagamento reale
- ⚠️ **Quando passi a Live**: cambia PAYPAL_CLIENT_ID e PAYPAL_CLIENT_SECRET con le credenziali live

### 3. **Database (Supabase)**
- ✅ **RLS Policies attive**: solo SELECT pubblico, INSERT solo da service role
- ✅ **Validazione email**: il tracking ordini richiede email + order_number
- ✅ **No sensitive data exposed**: nessun dato di pagamento salvato (solo PayPal Order ID)
- ✅ **Anon key safe**: la chiave anonima di Supabase è pubblica ma protetta da RLS

**Schema Database:**
```sql
orders (
  id UUID PRIMARY KEY,
  order_number TEXT UNIQUE,
  paypal_order_id TEXT UNIQUE,
  customer_email TEXT,
  customer_name TEXT,
  product_name TEXT,
  amount DECIMAL(10,2),
  currency TEXT DEFAULT 'EUR',
  status TEXT DEFAULT 'completed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
)
```

### 4. **Email (Resend)**
- ✅ **API Key server-side only**: mai esposta al frontend
- ✅ **No PII in logs**: solo customer email per debug
- ✅ **Template HTML safe**: nessun input utente non sanitizzato

### 5. **Frontend Security**
- ✅ **HTTPS only**: Netlify fornisce automaticamente SSL
- ✅ **No inline secrets**: nessuna chiave hardcoded nel codice
- ✅ **Input validation**: validazione form su tracciamento ordini
- ✅ **React sanitization**: React previene XSS di default

## ⚠️ Vulnerabilità Potenziali e Mitigazioni

### 1. **Rate Limiting** ⚠️
**Problema:** Attualmente non c'è rate limiting sulle API calls.
**Rischio:** Un attaccante potrebbe fare spam di richieste.
**Mitigazione:**
- Netlify ha rate limiting di base (gratuito: 125k requests/mese)
- Considera Netlify Edge Functions o Cloudflare per rate limiting avanzato

### 2. **Email Enumeration** ⚠️
**Problema:** La funzione `get-order` rivela se un'email esiste nel database.
**Rischio:** Basso (solo ordini completati), ma potenzialmente usabile per enumeration.
**Mitigazione:** Già implementata - richiede sia email CHE order_number (2FA-like).

### 3. **CORS** ✅
**Status:** Netlify gestisce CORS automaticamente per le Functions.
**Rischio:** Minimo, richieste solo dal tuo dominio.

### 4. **SQL Injection** ✅
**Status:** Supabase client usa prepared statements.
**Rischio:** Praticamente zero, ma sempre validare input.

## 🔐 Best Practices Implementate

1. ✅ **Separation of Concerns**: Frontend non ha accesso a secrets
2. ✅ **Server-side validation**: tutte le operazioni critiche server-side
3. ✅ **Environment variables**: tutte le credenziali in env vars
4. ✅ **HTTPS enforced**: Netlify forza HTTPS automaticamente
5. ✅ **No sensitive data in logs**: solo debug info, no passwords/tokens
6. ✅ **Minimal data collection**: solo email, nome, ordine (no carte di credito)
7. ✅ **PayPal handles payments**: PCI compliance gestita da PayPal

## 🚨 Cosa Fare in Caso di Breach

### Se pensi che le tue API keys siano state esposte:

1. **PayPal:**
   - Vai su https://developer.paypal.com/dashboard/
   - Revoca le credenziali attuali
   - Genera nuove credenziali
   - Aggiorna su Netlify Environment Variables

2. **Supabase:**
   - Vai su https://app.supabase.com/
   - Settings → API → Reset service_role key
   - Aggiorna SUPABASE_ANON_KEY su Netlify

3. **Resend:**
   - Vai su https://resend.com/api-keys
   - Revoca la key compromessa
   - Genera nuova API key
   - Aggiorna RESEND_API_KEY su Netlify

4. **Dopo aver cambiato keys:**
   - Redeploy del sito su Netlify (automatico se pussi su GitHub)
   - Verifica che tutto funzioni con le nuove credenziali

## 📋 Checklist Pre-Lancio

Prima di accettare pagamenti reali:

- [ ] Cambia PayPal da Sandbox a Live mode
- [ ] Verifica che tutte le API keys siano in Netlify Environment Variables (non in .env.local)
- [ ] Testa il flusso di pagamento end-to-end
- [ ] Verifica email di conferma ordine
- [ ] Testa tracking ordini
- [ ] Leggi Privacy Policy e GDPR compliance
- [ ] Configura backup automatici Supabase
- [ ] Monitora Netlify Functions logs per errori
- [ ] Configura notifiche per down time (Netlify ha monitoring built-in)

## 🛡️ Raccomandazioni Aggiuntive

### Per Maggiore Sicurezza:

1. **Monitoring:**
   - Usa Netlify Analytics per monitorare traffico anomalo
   - Abilita notifiche su Netlify per failed deployments
   - Monitora Supabase Dashboard per query anomale

2. **Backup:**
   - Supabase fa backup automatici (piano gratuito: 7 giorni retention)
   - Considera export manuale settimanale dei dati ordini

3. **Updates:**
   - Mantieni aggiornate le dipendenze npm (controlla vulnerabilità)
   - Run `npm audit` periodicamente
   - Aggiorna React, Vite, Supabase client quando escono fix di sicurezza

4. **Logging:**
   - Netlify Functions logs sono già attivi
   - Non loggare mai dati sensibili (passwords, card numbers, full emails in production)

5. **Cookie Banner:**
   - ✅ Già implementato con consenso esplicito
   - Cookie analytics solo dopo consenso

## 📞 Contatti Sicurezza

Se trovi una vulnerabilità:
- Email: antonio.pennino.mail@gmail.com
- Descrivi il problema in dettaglio
- Non pubblicare vulnerabilità pubblicamente prima di avermi contattato

## 📚 Risorse Utili

- [PayPal Security Best Practices](https://developer.paypal.com/api/rest/security/)
- [Supabase Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Netlify Security](https://docs.netlify.com/security/security-best-practices/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

**Ultimo Aggiornamento:** 29 Ottobre 2025
**Versione:** 1.0
