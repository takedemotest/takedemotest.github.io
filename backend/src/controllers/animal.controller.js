const Animal = require('../models/animal.model');

exports.getAnimals = async(request, reply)=>{
            try{
                const animals =await Animal.find().lean();
                return animals;
            }
            catch(error){
                reply.status(500).send({message: 'Error fetching animals', error: error.message})
            }

}

exports.createAnimals = async(request, reply)=>{
      const createAnimal = await Animal.create(request.body)
      return createAnimal
}

exports.updateAnimals = async(request, reply)=>{
    const {id} = request.params
    const updateAnimal = await Animal.findByIdAndUpdate(
        id,
        request.body,
        {new:true, runValidators:true}
    )
    if(!updateAnimal){
        return reply.status(404).send({message: 'Animal not found'})
    }
    return updateAnimal
}

exports.deleteAnimals = async(request, reply)=>{
    const {id} = request.params
    const deleteAnimal = await Animal.findByIdAndDelete(id)
    if(!deleteAnimal){
        return reply.status(404).send({message: 'Animal not found'})
    }
    return {message: 'Animal deleted'}
}
