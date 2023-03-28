import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { OrderCreatedEvent } from '../events/order-created.event';

@Injectable()
export class OrderCreatedListener {
  @OnEvent('order.created')
  sendEmail(event: OrderCreatedEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log(event, 'send email');
  }

  @OnEvent('order.created')
  sendSms(event: OrderCreatedEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log(event, 'send sms');
  }
}
