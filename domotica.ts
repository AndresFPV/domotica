abstract class RamaEstructura
{
    hijos : Estructura[]
    addHijo(estructura : Estructura)
    {
        this.hijos.push(estructura)
    }
}

interface Estructura
{
    nombre : string
    calcularGastoEnergia()
}

class Torres extends Estructura, RamaEstructura
{}

class Torre extends Estructura
{}

class Piso extends Estructura
{}

class Salon extends Estructura
{}