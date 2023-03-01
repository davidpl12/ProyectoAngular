import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../_services/storage.service';
import { Hermano } from './hermano';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  public hermano: Hermano = new Hermano;

  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
  }
}
