import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SeriesViewModel } from '../model/series-viewmodel';
import { MovieService } from '../service/movie.service';
import { touchAllFormFields } from '../helpers/validation';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent {

  seriesForm: FormGroup;
  series: SeriesViewModel;

  constructor(private movieServ: MovieService,
              private formBuilder: FormBuilder,
              private toast: ToastrService) {
    this.createFormBuild();
  }

  async search(): Promise<void> {
    if (!this.seriesForm.valid) {
      touchAllFormFields(this.seriesForm);
      return;
    }
    this.movieServ.getSeries(this.seriesForm.controls.name.value,
                            this.seriesForm.controls.season.value,
                            this.seriesForm.controls.episode.value).then((response) => {
      if (response) {
        this.series = response;
      } else {
        return;
      }
    }).catch((error) => {
      console.log(error);
      this.toast.error('fail', 'Log in failed');
    });
  }

  private createFormBuild() {
    this.seriesForm = this.formBuilder.group({
      name: ['', Validators.required],
      season: [''],
      episode: [''],
    });
  }

}
