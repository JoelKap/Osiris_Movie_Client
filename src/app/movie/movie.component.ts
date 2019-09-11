import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


import { MovieService } from '../service/movie.service';
import { touchAllFormFields } from '../helpers/validation';
import { MovieViewModel } from '../model/movie-viewmode';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  movieForm: FormGroup;
  movie: MovieViewModel;

  constructor(private movieServ: MovieService,
              private formBuilder: FormBuilder,
              private toast: ToastrService) {
    this.createFormBuild();
  }

  async search(): Promise<void> {
    if (!this.movieForm.valid) {
      touchAllFormFields(this.movieForm);
      return;
    }
    this.movieServ.getMovie(this.movieForm.controls.name.value).then((response) => {
      if (response) {
        this.movie = response;
      } else {
        return;
      }
    }).catch((error) => {
      console.log(error);
      this.toast.error('fail', 'Log in failed');
    });
  }


  private createFormBuild() {
    this.movieForm = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
}
