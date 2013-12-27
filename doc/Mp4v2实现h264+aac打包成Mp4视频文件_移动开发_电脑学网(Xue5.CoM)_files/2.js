function ObjectAD() {
  /* Define Variables*/
  this.ADID        = 0;
  this.ADType      = 0;
  this.ADName      = "";
  this.ImgUrl      = "";
  this.ImgWidth    = 0;
  this.ImgHeight   = 0;
  this.FlashWmode  = 0;
  this.LinkUrl     = "";
  this.LinkTarget  = 0;
  this.LinkAlt     = "";
  this.Priority    = 0;
  this.CountView   = 0;
  this.CountClick  = 0;
  this.InstallDir  = "";
  this.ADDIR       = "";
}

function CodeZoneAD(_id) {
  /* Define Common Variables*/
  this.ID          = _id;
  this.ZoneID      = 0;

  /* Define Unique Variables*/

  /* Define Objects */
  this.AllAD       = new Array();
  this.ShowAD      = null;

  /* Define Functions */
  this.AddAD       = CodeZoneAD_AddAD;
  this.GetShowAD   = CodeZoneAD_GetShowAD;
  this.Show        = CodeZoneAD_Show;

}

function CodeZoneAD_AddAD(_AD) {
  this.AllAD[this.AllAD.length] = _AD;
}

function CodeZoneAD_GetShowAD() {
  if (this.ShowType > 1) {
    this.ShowAD = this.AllAD[0];
    return;
  }
  var num = this.AllAD.length;
  var sum = 0;
  for (var i = 0; i < num; i++) {
    sum = sum + this.AllAD[i].Priority;
  }
  if (sum <= 0) {return ;}
  var rndNum = Math.random() * sum;
  i = 0;
  j = 0;
  while (true) {
    j = j + this.AllAD[i].Priority;
    if (j >= rndNum) {break;}
    i++;
  }
  this.ShowAD = this.AllAD[i];
}

function CodeZoneAD_Show() {
  if (!this.AllAD) {
    return;
  } else {
    this.GetShowAD();
  }

  if (this.ShowAD == null) return false;
  document.write(this.ShowAD.ADIntro);
}

var ZoneAD_2 = new CodeZoneAD("ZoneAD_2");
ZoneAD_2.ZoneID      = 2;
ZoneAD_2.ZoneWidth   = 0;
ZoneAD_2.ZoneHeight  = 0;
ZoneAD_2.ShowType    = 1;

var objAD = new ObjectAD();
objAD.ADID           = 57;
objAD.ADType         = 4;
objAD.ADName         = "now--6.15-9.15";
objAD.ImgUrl         = "";
objAD.InstallDir     = "http://www.xue5.com/";
objAD.ImgWidth       = 0;
objAD.ImgHeight      = 0;
objAD.FlashWmode     = 0;
objAD.ADIntro        = "<!-- ���λ��xue5468.60 -->\n\r<script type=\"text/javascript\" >BAIDU_CLB_SLOT_ID = \"713135\";</script>\n\r<script type=\"text/javascript\" src=\"http://cbjs.baidu.com/js/o.js\"></script>";
objAD.LinkUrl        = "";
objAD.LinkTarget     = 1;
objAD.LinkAlt        = "";
objAD.Priority       = 10;
objAD.CountView      = 0;
objAD.CountClick     = 0;
objAD.ADDIR          = "AD";
ZoneAD_2.AddAD(objAD);

ZoneAD_2.Show();
