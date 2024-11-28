import { Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { IApiResponse, IParentDept } from '../../model/interface/master';
import { single } from 'rxjs';

@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent implements OnInit {

  isFormvisible = signal<boolean>(false);
  masterSer = inject(MasterService);
  parentDeptList = signal<IParentDept[]>([])

  ngOnInit(): void {
     this.getParentDept(); 
  }

  getParentDept(){
    this.masterSer.getAllDept().subscribe((res:IApiResponse)=>{
      this.parentDeptList.set(res.data);
    })
  }

}
