'use server'

import prisma from "@/lib/prisma"

// ---------------------   PACIENTES  -----------------------

async function obtenerPacientes() {
    const pacientes = await prisma.paciente.findMany()
    return pacientes
}


async function obtenerPaciente(id) {
    const pacientes = await prisma.paciente.findUnique({
        where: { id: +id },
        include: {
            planta: true,
            medicinas: true,
        }
    })
    return pacientes
}


// ---------------------   MEDICINAS  -----------------------
async function obtenerMedicinas() {
    const medicinas = await prisma.medicina.findMany({
    include: {
        pacientes: true,
    }
    })
    
    return medicinas
}
async function obtenerMedicina(id) {
    const medicina = await prisma.medicina.findUnique({
        where: { id: +id },
        include: {
            pacientes: true
        }
    })
    return medicina
}

// ---------------------   PLANTA -----------------------

async function obtenerPlantas() {
    const plantas = await prisma.planta.findMany()
    return plantas
}


async function obtenerPlanta(id) {
    const planta = await prisma.planta.findUnique({
        where: { id: +id }
    })
    return planta
}


export {
    obtenerPacientes,
    obtenerPaciente,
    obtenerMedicinas,
    obtenerMedicina,
    obtenerPlantas,
    obtenerPlanta
}