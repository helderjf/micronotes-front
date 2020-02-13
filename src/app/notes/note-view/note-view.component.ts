import { NoteService } from './../note.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from '../note';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent implements OnInit {

  note: Note;
  id: number;

  constructor(private noteService: NoteService, private router:Router, private route: ActivatedRoute) { 
    this.id = +this.route.snapshot.paramMap.get('id');
    this.getData(this.id);
  }

  ngOnInit() {
    // this.getData(this.id);
  }






  getData(id:number){
    this.noteService.getNote(this.id)
      .toPromise()
      .then((data: Note)=> this.note=data)
      .catch((err)=>{
        console.log(err);
        alert("Can't process your request");
        this.goBack();
      });
  }





  edit(){
    this.router.navigateByUrl('/note/edit/'+this.note.id);
  }





  delete(){
    this.noteService.delete(this.note.id)
      .toPromise()
      .then(()=>{
        this.router.navigateByUrl('/notes');
      })
      .catch((err)=>{
        console.log(err);
        alert("Can't process your request");
        this.goBack();
      });
  }
  




  goBack(){
    this.router.navigateByUrl('/notes');
  }


}
