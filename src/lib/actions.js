'use server'
import { revalidatePath } from 'next/cache'

import prisma from '@/lib/prisma'

//  ------------------------ PLANTAS ------------------------
export async function insertarPlanta(formData) {
    const nombre = formData.get('nombre')
    const jefePlanta = formData.get('jefePlanta')


    await prisma.planta.create({
        data: {
            nombre: nombre,
            jefePlanta: jefePlanta,
        }
    })

    revalidatePath('/plantas')
}
export async function modificarPlanta(formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const jefePlanta = formData.get('jefePlanta')


    await prisma.planta.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            jefePlanta: jefePlanta,
        }
    })

    revalidatePath('/plantas')
}

export async function eliminarPlanta(formData) {
    const id = Number(formData.get('id'))

    await prisma.planta.delete({
        where: {
            id: id
        }
    })

    revalidatePath('/plantas')
}

//  ------------------------ PACIENTES ------------------------

export async function insertarPaciente(formData) {
    const nombre = formData.get('nombre')
    const fechaNacimiento = new Date(formData.get('fechaNacimiento'))
    const plantaId = Number(formData.get('plantaId')) //para la actividad 8

    await prisma.paciente.create({
        data: {
            nombre: nombre,
            fechaNacimiento: fechaNacimiento,
            plantaId: plantaId,
        }
    })

    revalidatePath('/pacientes')
}
export async function modificarPaciente(formData) {
    
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const fechaNacimiento = new Date(formData.get('fechaNacimiento'))
    const plantaId = Number(formData.get('plantaId')) //para la actividad 8

    await prisma.paciente.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            fechaNacimiento: fechaNacimiento,
            plantaId: plantaId,
        }
    })
    revalidatePath('/pacientes')
}

export async function eliminarPaciente(formData) {
    const id = Number(formData.get('id'))

    await prisma.paciente.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/pacientes')
}

// ------------------------------- MEDICINAS -----------------------
export async function insertarMedicina(prevState ,formData) {
    const nombre = formData.get('nombre')
    const via = formData.get('via')
    const pacienteIDs = await prisma.paciente.findMany({
        select: {
            id: true
        }
    })
    const connect = pacienteIDs.filter(paciente => formData.get(`paciente${paciente.id}`) !== null) 
  
    await prisma.medicina.create({
        data: {
            nombre: nombre,
            via: via,
            pacientes: {
                connect: connect,
            },
        }
    })
    revalidatePath('/medicinas');
    return {success:'la medicina se inserto correctamente'}
}
export async function modificarMedicina(prevState ,formData) {
    const id = Number(formData.get('id'))
    const nombre = formData.get('nombre')
    const via = formData.get('via')
    const pacienteIDs = await prisma.paciente.findMany({
        select: {
            id: true
        }
    })
    const connect = pacienteIDs.filter(paciente => formData.get(`paciente${paciente.id}`) !== null) 
    const disconnect = pacienteIDs.filter(paciente => formData.get(`paciente${paciente.id}`) === null) 

    await prisma.medicina.update({
        where: {
            id: id
        },
        data: {
            nombre: nombre,
            via: via,
            pacientes: {
                connect: connect,
                disconnect: disconnect
            },
        }
    })
    revalidatePath('/medicinas')
    return {success:'la medicina se modifico correctamente'}
}
export async function eliminarMedicina(prevState, formData) {
    const id = Number(formData.get('id'))
    await prisma.medicina.delete({
        where: {
            id: id
        }
    })
    return {success:'la medicina se elimino'}
}