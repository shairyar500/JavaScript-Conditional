let animal = "cats";
switch (animal) {
    case "lion":
    case "leopard":
        console.log("wild animal");
        break;
    case "cats":
    case "rabbits":
        console.log("pet animals");
        break;
    default:
        console.log("unknown");
        break;
}