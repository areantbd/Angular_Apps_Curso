import { Component } from '@angular/core';

interface Notes{
  Do: string,
  Re: string,
  Mi: string,
  Fa: string,
  Sol: string,
  La: string,
  Si: string,
}

@Component({
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrls: ['./piano.component.css']
})
export class PianoComponent {
  title = 'Piano';

  aplicarSonido(nota: string): void {
    const audio = new Audio()
    audio.src = `../assets/sonidos/${nota}.wav`
    audio.load()
    audio.play()
  }
}
