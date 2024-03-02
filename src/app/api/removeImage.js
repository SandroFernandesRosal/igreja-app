// pages/api/removeImage.js
import { google } from 'googleapis'
import { GoogleAuth } from 'google-auth-library'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Crie uma instância de GoogleAuth
      const auth = new GoogleAuth({
        keyFile: './credentials.json', // Certifique-se de que este caminho está correto
        scopes: ['https://www.googleapis.com/auth/drive'],
      })

      // Crie um cliente autenticado
      const client = await auth.getClient()

      // Crie um objeto Drive
      const drive = google.drive({ version: 'v3', auth: client })

      // Remova o arquivo do Google Drive
      await drive.files.delete({
        fileId: req.body.imageId,
      })

      res.status(200).json({ message: 'Imagem removida com sucesso' })
    } catch (error) {
      console.error('Erro ao remover imagem:', error)
      res.status(500).json({ error: 'Erro ao remover imagem' })
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' })
  }
}
