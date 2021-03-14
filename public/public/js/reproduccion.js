'use strict';

class Televisor{

    constructor(){
        this.encendido= false;
        this.volumen = 0;
        this.canal = 1;
    }

    get_encendido(){
        return this.encendido;
    }

    set_encendido(pEncendido){
        this.encendido = pEncendido;
    }

    get_canal(){
        return this.canal;
    }

    set_canal(pcanal){
        if(pcanal <= 20 && pcanal >= 1){
            this.canal = pcanal;
            return true;
        }
        else{
            return false;
        }   
    }

    get_volumen(){
        return this.volumen;
    }

    set_volumen(pVolumen){
        this.volumen = pVolumen;
        if(this.encendido && pVolumen <= 15 && pVolumen >= 1){
            this.volumen = pVolumen;
            return true;
        }
        else{
            return false;
        }
    }

    

    subir_volumen(){
        if(this.encendido && this.volumen < 15){
            this.volumen = this.volumen + 1;
            return true;
            
        }else{
            return false;
        }  
    }

    bajar_volumen(){
        if(this.encendido && this.volumen > 0){
            this.volumen = this.volumen - 1;
            return true;
        }
        else{
            return false;
        }
    }

    subir_canal(){
        if(this.canal < 10){
            this.canal = this.canal+ 1
        }
        else{
            this.canal = 1
        }
   
    }

    bajar_canal(){
        if(this.canal == 1){
            this.canal = 10
        }
        else{
            this.canal = this.canal - 1
        }
    }

}

