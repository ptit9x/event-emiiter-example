## Description

Node. js Event Emitter is used when there is a desire to decompose a codebase into components or services invoked using a pub-sub like asynchronous pattern.

## Requirements
- [Node >= 18.0.0](https://nodejs.org/en/download/)

## Case study
Let's say you have an order successfully saved to the database. Now you want to send email and phone number notifications. You will do the following:
- Create an API to create an order
- Create an event emitter with event name 'order.created'
- Listen to the 'order.created' event and process it at orders/listeners/order-created.listener.ts

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Stay in touch

- Author - [Richard Do](https://github.com/ptit9x)

## License

Nest is [MIT licensed](LICENSE).
