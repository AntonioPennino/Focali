# 🔍 Security Audit Checklist

Esegui questo audit ogni 2-3 mesi o dopo modifiche importanti al codice.

## 📦 Dipendenze e Vulnerabilità

### 1. Controlla vulnerabilità NPM
```bash
npm audit
```

**Cosa fare:**
- Se ci sono vulnerabilità `high` o `critical`: esegui `npm audit fix`
- Se `npm audit fix` non risolve: aggiorna manualmente il pacchetto
- Testa sempre dopo gli update!

### 2. Aggiorna dipendenze
```bash
npm outdated
```

**Aggiorna con cautela:**
```bash
npm update
# Oppure per major updates:
npm install <package>@latest
```

**Testa sempre dopo update importanti!**

## 🔐 Verifica Variabili d'Ambiente

### 1. Controlla che `.env.local` non sia nel git
```bash
git log --all --full-history -- .env.local
```
**Risultato atteso:** "fatal: ambiguous argument '.env.local': unknown revision"

Se trovi commit: **ALLARME!** Le chiavi potrebbero essere esposte.

### 2. Verifica .gitignore
```bash
cat .gitignore | grep -E "\.env"
```
**Deve includere:**
- `.env`
- `.env.local`
- `.env.*.local`

### 3. Verifica Netlify Environment Variables
- Vai su Netlify Dashboard > Site Settings > Environment Variables
- Controlla che ci siano:
  - `VITE_PAYPAL_CLIENT_ID`
  - `PAYPAL_CLIENT_SECRET`
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - `RESEND_API_KEY`

## 🔒 Controlla Configurazione PayPal

### Verifica modalità (Sandbox vs Live)
1. Apri `Cart.tsx`
2. Cerca `VITE_PAYPAL_CLIENT_ID`
3. Verifica su https://developer.paypal.com/dashboard/ se la key è Sandbox o Live

**Prima di andare Live:**
- [ ] Testa completamente in Sandbox
- [ ] Cambia credenziali su Netlify Environment Variables
- [ ] Redeploy
- [ ] Fai un ordine test (importo piccolo)
- [ ] Verifica email di conferma
- [ ] Verifica tracking ordine

## 🗄️ Controlla Database Supabase

### 1. Verifica RLS (Row Level Security)
- Vai su Supabase Dashboard → Database → Tables → `orders`
- Controlla che RLS sia `Enabled`
- Verifica policies:
  - SELECT: `true` (pubblico può leggere)
  - INSERT: Solo `service_role`
  - UPDATE/DELETE: Solo `service_role`

### 2. Controlla dati sensibili
```sql
-- Da Supabase SQL Editor
SELECT 
  order_number,
  customer_email,
  amount,
  created_at
FROM orders
ORDER BY created_at DESC
LIMIT 10;
```

**Verifica:**
- ✅ Nessun dato carta di credito
- ✅ Solo PayPal Order ID (safe)
- ✅ Email sembrano legittime (non spam)

### 3. Backup
- Supabase fa backup automatici (7 giorni su piano free)
- Considera export manuale mensile:
  - Database → Backups → Download

## 📧 Controlla Email (Resend)

### Verifica utilizzo API
- Vai su https://resend.com/
- Dashboard → Usage
- Controlla email inviate vs limite (100/giorno free, 3000/mese)

**Se ti avvicini al limite:**
- Upgrade a piano paid
- Oppure limita numero ordini giornalieri

## 🌐 Controlla Netlify

### 1. Verifica Deploy
- Netlify Dashboard → Deploys
- Ultimi deploy devono essere `Published` (verde)

### 2. Controlla Functions Logs
- Functions → Logs
- Cerca errori ripetuti o pattern anomali
- Verifica nessun leak di informazioni sensibili

### 3. Monitora Usage
- Analytics → Bandwidth
- Controlla traffico anomalo (spike improvvisi potrebbero indicare bot/attacchi)

## 🔍 Test Manuali

### 1. Test Pagamento End-to-End
- [ ] Aggiungi prodotto al carrello
- [ ] Checkout con PayPal
- [ ] Ricevi email conferma
- [ ] Tracking ordine funziona
- [ ] Ordine salvato su Supabase

### 2. Test Sicurezza Base

**Test 1: Email Validation**
```bash
# Da browser, prova a tracciare un ordine con email invalida
# Dovrebbe dare errore 400
```

**Test 2: Order Number Format**
```bash
# Prova con order number formato sbagliato
# Dovrebbe dare errore 400
```

**Test 3: SQL Injection (basic)**
```bash
# Prova input: F1234-5678-9012' OR '1'='1
# Dovrebbe dare errore 400 o 404, mai successo
```

## 🚨 Alert da Configurare

### 1. Netlify
- Site Settings → Notifications
- Attiva notifiche per:
  - Deploy failed
  - Deploy succeeded (opzionale)

### 2. Supabase
- Project Settings → API
- Monitora "API requests" per spike anomali

### 3. Email personale
Configura alert per:
- Ordini > 500€ (possibile frode)
- Più di 10 ordini in 1 ora (possibile bot)

## 📅 Calendario Audit

### Settimanale
- [ ] Controlla Netlify Functions logs
- [ ] Verifica deploy recenti

### Mensile
- [ ] `npm audit`
- [ ] Controlla ordini Supabase
- [ ] Verifica usage Resend
- [ ] Test pagamento end-to-end

### Trimestrale
- [ ] `npm outdated` + update dipendenze
- [ ] Backup manuale Supabase
- [ ] Review completa SECURITY.md
- [ ] Test sicurezza base

### Annuale
- [ ] Rigenera tutte le API keys (rotazione)
- [ ] Review Privacy Policy
- [ ] Audit completo codice

## 📞 Cosa Fare in Caso di Problema

### Sito down
1. Controlla Netlify status page
2. Verifica ultimo deploy
3. Rollback se necessario: Deploys → Deploy → "Publish deploy"

### Ordini non arrivano
1. Controlla Netlify Functions logs
2. Verifica Supabase (ordine salvato?)
3. Verifica Resend (email inviata?)

### Pagamenti falliti
1. Controlla PayPal Dashboard
2. Verifica credenziali PayPal su Netlify
3. Controlla logs `create-paypal-order` e `capture-paypal-order`

---

**Ultimo controllo:** [Data]
**Prossimo controllo:** [Data + 1 mese]
