const Product = require('../models/product')

const productController = {

  index: async (req, res) => {
    const { name, category } = req.query

    try {
      if (name || category) {
        const products = await Product.find({
          $or:
            [
              {
                title: name
              },
              {
                category
              }
            ]
        })

        return res.status(200).json(products)
      }

      const products = await Product.find()
      return res.status(200).json(products)

    } catch (error) {
      return res.status(400).json({ message: "Erro ao processar requisição." })
    }
  },

  create: async (req, res) => {
    const { title, description, price, category } = req.body

    const productAlreadyExists = await Product.findOne({ title })

    if (productAlreadyExists) {
      return res.status(400).json({ message: "Produto já existente." })
    }

    try {
      const product = await Product.create({
        title,
        description,
        price,
        category,
      })

      return res.status(200).json({ message: 'Produto criado com sucesso!', product })
    } catch (error) {
      return res.status(400).json({ message: 'Erro ao criar produto.' })
    }


  },

  show: async (req, res) => {
    const { id } = req.params

    try {
      const product = await Product.findOne({
        _id: id
      })

      if (!product) {
        return res.status(400).json({ message: "Produto não encontrado." })
      }

      return res.status(200).json(product)
    } catch (error) {
      return res.status(400).json({ message: "Erro ao processar requisição." })
    }
  },

  update: async (req, res) => {
    const { id } = req.params
    const { title, description, price, category } = req.body

    try {
      const product = await Product.findOneAndUpdate({
        _id: id
      }, {
        title,
        description,
        price,
        category
      }, {
        new: true
      })

      return res.status(200).json({ message: "Produto atualizado com sucesso!", product })
    } catch (error) {
      return res.status(400).json({ message: "Erro ao atualizar produto." })
    }
  },

  delete: async (req, res) => {
    const { id } = req.params

    try {
      await Product.deleteOne({
        _id: id
      })

      return res.status(200).json({ message: "Produto deletado com sucesso!" })
    } catch (error) {
      return res.status(400).json({ message: "Erro ao deletar produto." })
    }
  },
}

module.exports = productController