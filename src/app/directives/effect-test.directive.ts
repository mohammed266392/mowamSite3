import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appEffectTest]',
  standalone: true
})
export class EffectTestDirective implements OnInit, OnDestroy {
  @Input() backgroundColor: string = 'yellow';
  @Input() backgroundColor1: string = 'blue';

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        console.log("mes datas", entry)
        if (entry.isIntersecting) {
          this.el.nativeElement.style.backgroundColor = this.backgroundColor;
        }else{
          this.el.nativeElement.style.backgroundColor = this.backgroundColor1;
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
