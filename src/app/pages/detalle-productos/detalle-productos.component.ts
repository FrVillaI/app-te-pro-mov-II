import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProdctosService } from '../../service/prodctos.service';
import { CarritoService } from '../../service/carrito.service';

@Component({
  selector: 'app-detalle-productos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css']
})
export class DetalleProductosComponent implements OnInit {

  serviciosP = inject(ProdctosService);
  serviciosC = inject(CarritoService);
  ruta = inject(ActivatedRoute);
  router = inject(Router);

  id: any;
  producto: any;

  ngOnInit() {
    this.ruta.params.subscribe(p => {
      this.id = p['idProducto'];
      this.serviciosP.getProductosID(this.id).subscribe(producto => {
        this.producto = producto;
      });
    });
  }

  agregarC() {
    this.serviciosC.postProducto(this.producto);
    this.router.navigate(['productos']);
  }
}
