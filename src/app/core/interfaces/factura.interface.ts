
export interface Factura {
  id:             number;
  pacienteId:     number;
  estudioId:      number;
  estado:         boolean;
  fechaEmision:   Date;
  precioCompra:   number;
  cantidad:       number;
}