import { FormsModule, NgForm } from '@angular/forms';
import {AfterViewInit, ChangeDetectorRef, Component, ElementRef,OnDestroy, ViewChild} from '@angular/core';



@Component({
  selector: 'app-pay',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cardInfo') cardInfo: ElementRef;
  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;
  constructor(private cd: ChangeDetectorRef) {}
  
  ngAfterViewInit() {
    this.card = elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);
this.card.addEventListener('change', this.cardHandler); }
  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }
  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }
  async onSubmit(form: NgForm) {
    const { token, error } = await stripe.createToken(this.card);
if (error) {
  console.log('Something is wrong:', error);
} else {
  console.log('Success!', token);
  // <span class="code-annotation">// ...send the token to the your backend to process the charge</span>
}
  }
}
