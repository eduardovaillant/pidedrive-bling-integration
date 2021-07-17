
import dotenv from 'dotenv'
dotenv.config()

export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/api',
  pipedriveBaseURL: process.env.PIPEDRIVE_BASE_URL || 'https://api.pipedrive.com/v1/',
  pipedriveToken: process.env.PIPEDRIVE_TOKEN || '',
  blingBaseUrl: process.env.BLING_BASE_URL || 'https://bling.com.br/Api/v2/',
  blingToken: process.env.BLING_TOKEN || '',
  port: process.env.PORT || 3000
}
