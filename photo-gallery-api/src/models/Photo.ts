import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    title: String,
    description: String,
    imagePath: String,
    nombre :String,
    apellido: String,
    email:String,
    fecha_nacimiento: String
});

export interface IPhoto extends Document {
    title: string;
    description: string;
    imagePath: string;
    nombre :string;
    apellido: string;
    email:string;
    fecha_nacimiento: string;
}

export default model<IPhoto>('Photo', schema);
