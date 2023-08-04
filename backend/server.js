import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import cors from 'cors'

const app = express()

dotenv.config()

connectDB()

app.use(cors());

app.use('/api/products',productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`))