const Animal = require('../models/animal.model');

exports.getAnimals = async(request, reply)=>{
            const animals =await Animal.find();
            return animals

}

exports.createAnimals = async(request, reply)=>{
      const createAnimal = await Animal.create(request.body)
      return {
        message: 'animal created',
        createAnimal
      }
}

exports.updateAnimals = async(request, reply)=>{
    const {id} = request.params
    const updateAnimal = await Animal.findByIdAndUpdate(
        id,
        request.body,
        {new:true}
    )
    return updateAnimal
}

exports.deleteAnimal = async(request, reply)=>{
    const {id} = request.params
    await Animal.findByIdAndDelete(id)
    return {message: 'Animal deleted'}
}
