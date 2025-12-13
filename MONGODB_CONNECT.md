MongoDB connection from VS Code (MongoDB for VS Code extension)

Quick steps

1. Install the MongoDB for VS Code extension (if not already).
2. Open VS Code and click the MongoDB icon in the Activity Bar.
3. Expand the Connections pane.
4. Click the More Actions (three dots) → "Add MongoDB Connection with Connection String...".
   - Or open Command Palette (Ctrl+Shift+P) → `MongoDB: Connect with Connection String...`.
5. Paste your connection string and press Enter.

Sample connection strings (replace placeholders)

- Atlas (SRV):
  mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority

- Standard (host:port):
  mongodb://<username>:<password>@host.example.com:27017/<dbname>?authSource=admin

- Local (no auth):
  mongodb://localhost:27017/my-local-db

Tips for getting the connection string

- Atlas: In your Atlas project, click "Connect" → "Connect your application" and copy the provided connection string. Replace `<password>` and `<dbname>`.
- Compass: Use the connection string shown in Atlas or in Compass connection dialog.

Common troubleshooting

- Authentication errors:
  - Ensure username/password are correct.
  - If using Atlas, ensure your user has the correct database role.
- IP whitelist / network access:
  - For Atlas, add your IP (or 0.0.0.0/0 for testing) under Network Access → IP Whitelist.
- SRV vs non-SRV:
  - Use the `mongodb+srv://` string for Atlas clusters; ensure DNS lookups are allowed on your network.
- TLS/SSL errors:
  - Atlas requires TLS. If using a custom CA, configure the extension accordingly.

Using a connection string from your repo env

- If your project stores `MONGODB_URI` in `.env.local`, copy that value and paste it into the extension prompt.
- Example `.env.local` entry:
  MONGODB_URI="mongodb+srv://USER:PASSWORD@cluster0.mongodb.net/DBNAME?retryWrites=true&w=majority"

Security notes

- Do NOT commit `.env.local` or any file containing credentials.
- Prefer using project-level secret manager (host provider) for production.

If you want, tell me your MongoDB provider (Atlas, local, MongoDB on VM) and I can:
- build the exact connection string with placeholders filled, or
- generate an example `.env.local` entry (kept local), or
- walk you through the Atlas UI to copy a connection string step-by-step.
