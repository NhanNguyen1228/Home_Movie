import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {

  dangChieuStatus: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  hienPhimDangChieu(){
    this.dangChieuStatus = true;
  }

  hienPhimSapChieu(){
    this.dangChieuStatus = false;
  }

}
