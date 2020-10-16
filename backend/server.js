import express from 'express'
import connectDB from './config/db.js'
import colors from 'colors'
import dotenv from 'dotenv'
import productRoutes from './routes/productsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT, 
  console.log(`Server running in ${process.env.NODE_ENV} mode, on port ${PORT}`.yellow.bold)
)