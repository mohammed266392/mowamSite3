import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEffectTest]',
  standalone: true
})
export class EffectTestDirective implements OnInit, OnDestroy {
 
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log("mes datas", entry)
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement,'swip-on-base')
     
        }else{
          this.renderer.removeClass(this.el.nativeElement,'swip-on-base')

        }
      });
    }, { threshold: 0.1 }); // Se déclenche lorsque 10% de l'élément est visible

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

}
