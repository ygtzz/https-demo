# https-demo

## 生成ssl证书

1. 生成Private Key 和 CSR
```bash
openssl req -new -newkey rsa:2048 -nodes -out mydomain.csr -keyout private.key
```
2. 利用上一步生成的private.key和mydomain.csr生成自签名证书
```bash
openssl x509 -req -days 365 -in mydomain.csr -signkey private.key -out mydomain.crt
```

## 启动

### koa server

```bash
npm run dev
```

### express server

```bash
npm run express
```