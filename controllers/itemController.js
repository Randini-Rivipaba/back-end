const Item= require('../models/item');

const getItems = async(req,res)=>{
    try{
        const items= await Item.find();
        res.json(items);
    } catch(error){
        res.status(500).json({message:error.message});

    }
};

const createItem =async(req,res)=>{
    const item= new Item({
        name:req.body.name,
        quantity:req.body.quantity,
        mark:req.body.mark
    })
    try{
        const newItem = await item.save();
        res.status(201).json(newItem);

    } catch(error){
        res.status(400).json({message:error.message});
    }
};

const deleteItem = async(req,res)=>{
        try{
            const item =await Item.findByIdAndDelete(req.params.id);
            if(!item){
                return res.status(404).json({message:"Item not found"});
            }
                res.json({message:'Item removed'});
            
        }catch (error){
            res.status(500).json({message:error.message});
        }
};

const updateItem = async (req,res)=> {
    try{
        const item= await Item.findById(req.params.id);
        if(!item){
            return res.status(404).json({ message:"item not found"});
        }
        (item.name= req.body.name || item.name),
        (item.quantity = req.body.quantity || item.quantity),
        (item.mark= req.body.mark );
        const updateItem= await item.save();
        res.json(updateItem);
    }catch (error) {
        res.status(500).json({message: error,message});
    }
}

const markItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    item.mark = !item.mark; 
    const updatedItem = await item.save();

    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports={getItems,createItem,deleteItem,updateItem,markItem};