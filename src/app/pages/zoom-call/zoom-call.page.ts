import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { Zoom } from '@ionic-native/zoom/ngx';

@Component({
  selector: 'app-zoom-call',
  templateUrl: './zoom-call.page.html',
  styleUrls: ['./zoom-call.page.scss'],
})
export class ZoomCallPage implements OnInit {

  platformeType: string = '';

  // Token variables (Retrieve from Rest API)
  zoomToken = '';
  zoomAccessToken = '';
  userId = '';

  // Meeting variables
  meetingNumber = null;
  meetingPassword = '';
  displayName = 'Zoom Ionic';
  language = 'F RFR';

  constructor(private toastCtrl: ToastController,
    private zoomService: Zoom,
    private platform: Platform) { }

  ngOnInit() {
    this.platformeType = this.checkPlatform();
    console.log('Type de platforme :', this.platformeType);

  }

  checkPlatform() {
    if (document.URL.startsWith('http') || document.URL.startsWith('http://localhost:8080')) {
      return 'web';
    } else (this.platform.is('android') || this.platform.is('ios'))
    {
      return 'mobile';
    }
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  //#region zoom
  /**
   * Join a meeting.
   */
  joinMeeting() {
    console.log('Going to join meeting');
    // Prepare meeting option
    const options = {
      no_driving_mode: true,
      no_invite: true,
      no_meeting_end_message: true,
      no_titlebar: false,
      no_bottom_toolbar: false,
      no_dial_in_via_phone: true,
      no_dial_out_to_phone: true,
      no_disconnect_audio: true,
      no_share: true,
      no_audio: true,
      no_video: true,
      no_meeting_error_message: true
    };
    // Call join meeting method.
    this.zoomService.joinMeeting(this.meetingNumber, this.meetingPassword, this.displayName, options)
      .then((success) => {
        console.log(success);
        this.presentToast(success);
        this.meetingNumber = null;
        this.meetingPassword = null;
      }).catch((error) => {
        console.log(error);
        this.presentToast(error);
      });
  }

  /**
   * Start an existing meeting with ZAK.
   */
  startMeetingWithZAK() {
    console.log('Going to start meeting with ZAK');
    // Prepare meeting option
    const options = {};
    // Call start meeting method
    this.zoomService.startMeetingWithZAK(this.meetingNumber,
      this.displayName, this.zoomToken, this.zoomAccessToken, this.userId, options).then((success) => {
        console.log(success);
        this.presentToast(success);
        this.meetingNumber = null;
        this.meetingPassword = null;
      }).catch((error) => {
        console.log(error);
        this.presentToast(error);
      });
  }

  /**
   * Change the in-meeting language.
   */
  setLanguage() {
    this.zoomService.setLocale(this.language).then((success) => {
      console.log(success);
      this.presentToast(success);
    }).catch((error) => {
      console.log(error);
      this.presentToast(error);
    });
  }
  //#endregion
}
