/*
Analogía QA: vas a modelar el payload de un carrito de compras y restringir el método de pago a un union cerrado 
— exactamente lo que harías al describir el contrato de un endpoint en un test de contract.
*/

/*

Define un type llamado Product con las propiedades:
id (number)
name (string)
price (number)
Crea una variable myCart que sea un array de Product (Product[]) con al menos 2 productos.
Crea un union type llamado PaymentMethod que solo permita los valores: "CreditCard", "Cash" o "PayPal".
Declara una variable selectedPayment con tipo PaymentMethod y asígnale un valor válido.
Intenta asignar un valor inválido (ej. "Bitcoin") a selectedPayment para ver el error de TypeScript. Luego comenta esa línea.
Imprime el carrito y el método de pago.

*/

type Product = {
    id: number;
    name: string;
    price: number;
};

const myCart: Product[] = [
    { id: 1, name: "Laptop", price: 999.99 },
    { id: 2, name: "Headphones", price: 199.99 }
];

type PaymentMethod = "CreditCard" | "Cash" | "PayPal";

let selectedPayment: PaymentMethod = "CreditCard";

// selectedPayment = "Bitcoin"; // Esto causará un error de TypeScript

console.log("Carrito:", myCart);
console.log("Método de pago seleccionado:", selectedPayment);   



