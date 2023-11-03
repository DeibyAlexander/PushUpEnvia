import express from "express";
import dotenv from 'dotenv'
import { MongoClient, ObjectId } from "mongodb";

dotenv.config()
const router = express.Router()

const base = process.env.MONGO_ELN
const nombrebase = 'Envia'

//todo -> ----------------------------------------------USUARIOS---------------------------------------------

router.get('/usuarios', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Usuario')
        const result = await collection.find().toArray()

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.post('/usuarios', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const {nombre, direccion, telefono, correo, contraseña, rol} = req.body

        const usuario = {
            nombre,
            direccion,
            telefono,
            correo,
            contraseña,
            rol
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Usuario')
        const result = await collection.insertOne(usuario)

        res.json({result, usuario})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

router.delete('/usuarios/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        const id = req.params

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Usuario')
        const result = await collection.findOneAndDelete({_id: new ObjectId(id)})

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.patch('/usuarios/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const id = req.params

        const {nombre, direccion, telefono, correo, contraseña, rol} = req.body

        const usuario = {
            nombre,
            direccion,
            telefono,
            correo,
            contraseña,
            rol
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Usuario')
        const result = await collection.findOneAndUpdate({_id: new ObjectId(id)},{$set: usuario})

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

//todo -> ----------------------------------------------RUTA---------------------------------------------

router.get('/ruta', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Ruta')
        const result = await collection.find().toArray()

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.post('/ruta', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const {nombre_ruta, ciudad_origen, ciudad_destino, distancia, precio_ruta } = req.body

        const ruta = {
            nombre_ruta,
            ciudad_origen,
            ciudad_destino, 
            distancia,
            precio_ruta
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Ruta')
        const result = await collection.insertOne(ruta)

        res.json({result, ruta})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

router.delete('/ruta/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        const id = req.params

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Ruta')
        const result = await collection.findOneAndDelete({_id: new ObjectId(id)})

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.patch('/ruta/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const id = req.params

        const {nombre_ruta, ciudad_origen, ciudad_destino, distancia, precio_ruta} = req.body

        const ruta = {
            nombre_ruta,
            ciudad_origen,
            ciudad_destino, 
            distancia,
            precio_ruta
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Ruta')
        const result = await collection.findOneAndUpdate({_id: new ObjectId(id)},{$set: ruta})

        res.json({result, ruta })

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})


//todo -> ----------------------------------------------TIPO PAQUETE---------------------------------------------

router.get('/tipopaquete', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('TipoPaquete')
        const result = await collection.find().toArray()

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.post('/tipopaquete', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const { descripcion_tipo_paquete,precio_por_tipo} = req.body

        const tipopaquete = {
            descripcion_tipo_paquete,
            precio_por_tipo
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('TipoPaquete')
        const result = await collection.insertOne(tipopaquete)

        res.json({result, tipopaquete})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

router.delete('/tipopaquete/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        const id = req.params

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('TipoPaquete')
        const result = await collection.findOneAndDelete({_id: new ObjectId(id)})

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.patch('/tipopaquete/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const id = req.params

        const {descripcion_tipo_paquete, precio_por_tipo} = req.body

        const tipopaquete = {
            descripcion_tipo_paquete,
            precio_por_tipo
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('TipoPaquete')
        const result = await collection.findOneAndUpdate({_id: new ObjectId(id)},{$set: tipopaquete})

        res.json({result, tipopaquete })

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

//todo -> ----------------------------------------------TIPO PAQUETE---------------------------------------------

router.get('/tipopaquete', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('TipoPaquete')
        const result = await collection.find().toArray()

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.post('/tipopaquete', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const { descripcion_tipo_paquete,precio_por_tipo} = req.body

        const tipopaquete = {
            descripcion_tipo_paquete,
            precio_por_tipo
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('TipoPaquete')
        const result = await collection.insertOne(tipopaquete)

        res.json({result, tipopaquete})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

router.delete('/tipopaquete/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        const id = req.params

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('TipoPaquete')
        const result = await collection.findOneAndDelete({_id: new ObjectId(id)})

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.patch('/tipopaquete/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const id = req.params

        const {descripcion_tipo_paquete, precio_por_tipo} = req.body

        const tipopaquete = {
            descripcion_tipo_paquete,
            precio_por_tipo
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('TipoPaquete')
        const result = await collection.findOneAndUpdate({_id: new ObjectId(id)},{$set: tipopaquete})

        res.json({result, tipopaquete })

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

//todo -> ----------------------------------------------ENVIO---------------------------------------------

router.get('/envio', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Envio')
        const result = await collection.aggregate([
            {
                $lookup:{
                    from: "Paquete",
                    localField: "id_paquete",
                    foreignField: '_id',
                    as: "id_paquete"
                }
            },
            {
                $unwind: "$id_paquete"
            },
            {
                $lookup:{
                    from: "Usuario",
                    localField: "id_usuario",
                    foreignField: '_id',
                    as: "id_usuario"
                }
            },
            {
                $unwind: "$id_usuario"
            },
            {
                $lookup:{
                    from: "Usuario",
                    localField: "id_paquete.id_usuario_reminente",
                    foreignField: '_id',
                    as: "id_usuario_reminente"
                }
            },
            {
                $unwind: "$id_usuario_reminente"
            },
            {
                $lookup:{
                    from: "Usuario",
                    localField: "id_paquete.id_usuario_destinatario",
                    foreignField: '_id',
                    as: "id_usuario_destinatario"
                }
            },
            {
                $unwind: "$id_usuario_destinatario"
            },
            {
                $lookup:{
                    from: "TipoPaquete",
                    localField: "id_paquete.id_tipo_paquete",
                    foreignField: '_id',
                    as: "id_tipo_paquete"
                }
            },
            {
                $unwind: "$id_tipo_paquete"
            },
            {
                $lookup:{
                    from: "Ruta",
                    localField: "id_paquete.id_ruta",
                    foreignField: '_id',
                    as: "id_ruta"
                }
            },
            {
                $unwind: "$id_ruta"
            }, 
            {
                $project:{
                    _id:0,
                    "id_paquete.id_usuario_reminente":{
                        "nombre": "$id_usuario_reminente.nombre"
                    },
                    "id_paquete.id_usuario_destinatario":{
                        "nombre": "$id_usuario_destinatario.nombre"
                    },
                    "id_paquete.peso":1,
                    "id_paquete.telefono":1,
                    "id_paquete.dimensiones":1,
                    "id_paquete.fecha_envio":1,
                    "id_paquete.estado_paquete":1,
                    "id_paquete.ubicacion_actual":1,
                    "id_paquete.id_tipo_paquete":{
                        "descripcion_tipo_paquete":"$id_tipo_paquete.descripcion_tipo_paquete"
                    },
                    "id_paquete.id_ruta":{
                        "nombre_ruta":"$id_ruta.nombre_ruta"
                    },
                    id_usuario:1,
                    fecha_envio:1,
                    fecha_entrega:1
                }
            }
        ]).toArray()

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.post('/envio', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const { id_usuario,id_paquete, fecha_envio,fecha_entrega } = req.body

        const envio = {
            id_usuario: new ObjectId(id_usuario),
            id_paquete: new ObjectId(id_paquete), 
            fecha_envio: new Date(fecha_envio),
            fecha_entrega: new Date(fecha_entrega)
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Envio')
        const result = await collection.insertOne(envio)

        res.json({result, envio})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

router.delete('/envio/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        const id = req.params

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Envio')
        const result = await collection.findOneAndDelete({_id: new ObjectId(id)})

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.patch('/envio/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const id = req.params

        const { id_usuario,id_paquete, fecha_envio,fecha_entrega} = req.body

        const envio = {
            id_usuario: new ObjectId(id_usuario),
            id_paquete: new ObjectId(id_paquete), 
            fecha_envio: new Date(fecha_envio),
            fecha_entrega: new Date(fecha_entrega)
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Envio')
        const result = await collection.findOneAndUpdate({_id: new ObjectId(id)},{$set: envio})

        res.json({result, envio })

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

//todo -> ----------------------------------------------PAQUETE---------------------------------------------

router.get('/paquete', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Paquete')
        const result = await collection.aggregate([
            {
                $lookup:{
                    from: "Usuario",
                    localField: "id_usuario_reminente",
                    foreignField: '_id',
                    as: "id_usuario"
                }
            },
            {
                $unwind: "$id_usuario"
            },
            {
                $lookup:{
                    from: "Usuario",
                    localField: "id_usuario_reminente",
                    foreignField: '_id',
                    as: "id_usuario_reminente"
                }
            },
            {
                $unwind: "$id_usuario_reminente"
            },
            {
                $lookup:{
                    from: "Usuario",
                    localField: "id_usuario_destinatario",
                    foreignField: '_id',
                    as: "id_usuario_destinatario"
                }
            },
            {
                $unwind: "$id_usuario_destinatario"
            },
            {
                $lookup:{
                    from: "TipoPaquete",
                    localField: "id_tipo_paquete",
                    foreignField: '_id',
                    as: "id_tipo_paquete"
                }
            },
            {
                $unwind: "$id_tipo_paquete"
            },
            {
                $lookup:{
                    from: "Ruta",
                    localField: "id_ruta",
                    foreignField: '_id',
                    as: "id_ruta"
                }
            },
            {
                $unwind: "$id_ruta"
            }, 
            {
                $project:{
                    _id:0,
                    "id_usuario_reminente":{
                        "nombre": "$id_usuario_reminente.nombre"
                    },
                    "id_usuario_destinatario":{
                        "nombre": "$id_usuario_destinatario.nombre"
                    },
                    "peso":1,
                    "telefono":1,
                    "dimensiones":1,
                    "fecha_envio":1,
                    "estado_paquete":1,
                    "ubicacion_actual":1,
                    "id_tipo_paquete":{
                        "descripcion_tipo_paquete":"$id_tipo_paquete.descripcion_tipo_paquete"
                    },
                    "id_ruta":{
                        "nombre_ruta":"$id_ruta.nombre_ruta"
                    },
                  
                }
            }
        ]).toArray()

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.post('/paquete', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const { id_usuario_reminente,id_usuario_destinatario, peso, telefono, dimensiones, fecha_envio, estado_paquete, ubicacion_actual, id_tipo_paquete,id_ruta } = req.body

        const paquete = {
            id_usuario_reminente: new ObjectId(id_usuario_reminente),
            id_usuario_destinatario: new ObjectId(id_usuario_destinatario), 
            peso,
            telefono,
            dimensiones,
            fecha_envio: new Date(fecha_envio),
            estado_paquete,
            ubicacion_actual,
            id_tipo_paquete: new ObjectId(id_tipo_paquete),
            id_ruta: new ObjectId(id_ruta), 
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Paquete')
        const result = await collection.insertOne(paquete)

        res.json({result, paquete})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

router.delete('/paquete/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        const id = req.params

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Paquete')
        const result = await collection.findOneAndDelete({_id: new ObjectId(id)})

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.patch('/paquete/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const id = req.params

        const { id_usuario_reminente,id_usuario_destinatario, peso, telefono, dimensiones, fecha_envio, estado_paquete, ubicacion_actual, id_tipo_paquete,id_ruta} = req.body

        const paquete = {
            id_usuario_reminente: new ObjectId(id_usuario_reminente),
            id_usuario_destinatario: new ObjectId(id_usuario_destinatario), 
            peso,
            telefono,
            dimensiones,
            fecha_envio: new Date(fecha_envio),
            estado_paquete,
            ubicacion_actual,
            id_tipo_paquete: new ObjectId(id_tipo_paquete),
            id_ruta: new ObjectId(id_ruta), 
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Paquete')
        const result = await collection.findOneAndUpdate({_id: new ObjectId(id)},{$set: paquete})

        res.json({result, paquete })

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

//todo -> ----------------------------------------------SEGUIMIENTO---------------------------------------------

router.get('/seguimiento', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Seguimiento')
        const result = await collection.aggregate([
            {
                $lookup:{
                    from: "Paquete",
                    localField: "id_paquete",
                    foreignField: '_id',
                    as: "id_paquete"
                }
            },
            {
                $unwind: "$id_paquete"
            },
            {
                $lookup:{
                    from: "Usuario",
                    localField: "id_paquete.id_usuario_reminente",
                    foreignField: '_id',
                    as: "id_usuario_reminente"
                }
            },
            {
                $unwind: "$id_usuario_reminente"
            },
            {
                $lookup:{
                    from: "Usuario",
                    localField: "id_paquete.id_usuario_destinatario",
                    foreignField: '_id',
                    as: "id_usuario_destinatario"
                }
            },
            {
                $unwind: "$id_usuario_destinatario"
            },
            {
                $lookup:{
                    from: "TipoPaquete",
                    localField: "id_paquete.id_tipo_paquete",
                    foreignField: '_id',
                    as: "id_tipo_paquete"
                }
            },
            {
                $unwind: "$id_tipo_paquete"
            },
            {
                $lookup:{
                    from: "Ruta",
                    localField: "id_paquete.id_ruta",
                    foreignField: '_id',
                    as: "id_ruta"
                }
            },
            {
                $unwind: "$id_ruta"
            }, 
            {
                $project:{
                    _id:0,
                    "id_paquete.id_usuario_reminente":{
                        "nombre": "$id_usuario_reminente.nombre"
                    },
                    "id_paquete.id_usuario_destinatario":{
                        "nombre": "$id_usuario_destinatario.nombre"
                    },
                    "id_paquete.peso":1,
                    "id_paquete.telefono":1,
                    "id_paquete.dimensiones":1,
                    "id_paquete.fecha_envio":1,
                    "id_paquete.estado_paquete":1,
                    "id_paquete.ubicacion_actual":1,
                    "id_paquete.id_tipo_paquete":{
                        "descripcion_tipo_paquete":"$id_tipo_paquete.descripcion_tipo_paquete"
                    },
                    "id_paquete.id_ruta":{
                        "nombre_ruta":"$id_ruta.nombre_ruta"
                    },
                    fecha_evento:1,
                    descripcion_evento:1,
                    ubicacion_evento:1
                }
            }
        ]).toArray()

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.post('/seguimiento', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const { id_paquete, fecha_evento,descripcion_evento, ubicacion_evento } = req.body

        const seguimiento = {
            id_paquete: new ObjectId(id_paquete), 
            fecha_evento: new Date(fecha_evento),
            descripcion_evento,
            ubicacion_evento
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Seguimiento')
        const result = await collection.insertOne(seguimiento)

        res.json({result, seguimiento})

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})

router.delete('/seguimiento/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {
        const id = req.params

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Seguimiento')
        const result = await collection.findOneAndDelete({_id: new ObjectId(id)})

        res.json(result)

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})
    }finally{
        console.log("Peticion finalizada");
        client.close()
    }
})

router.patch('/seguimiento/:id', async(req,res)=>{
    const client = new MongoClient(base)

    try {

        const id = req.params

        const { id_paquete, fecha_evento,descripcion_evento, ubicacion_evento } = req.body

        const seguimiento = {
            id_paquete: new ObjectId(id_paquete), 
            fecha_evento: new Date(fecha_evento),
            descripcion_evento,
            ubicacion_evento
        }

        await client.connect()
        const db = client.db(nombrebase)
        const collection = db.collection('Seguimiento')
        const result = await collection.findOneAndUpdate({_id: new ObjectId(id)},{$set: seguimiento})

        res.json({result, seguimiento })

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Error interno del servidor"})

    }finally{
        console.log("Peticion finalizada");
        client.close()
    }

})





export default router