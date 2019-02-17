<template>
<div>
  <div>

  <nav class="navbar navbar-inverse" style="margin-bottom: 50px;">
    <div class="navbar-header">
      <a class="navbar-brand" href="/"><img src="../images/JUKEBLOCKS.png" style="width: 20%;"></a>
    </div>
  </nav>

  <div class="album"><img src="../images/SampleAlbum.png" id="album"></div>

  <div class=“top”>
    <img src="../images/Top-01.svg" class="image1">
    <div class="queteList">
      <ul id="queteList">
        <li class="firstList">
          <div class=firstQuete>
            <img src="../images/queteAlbum.png" align="left" id="firstQuete"> The Beatles
            <br> A Hard Day’s Night • 2:11
          </div>
        </li>
        <li class="secondList">
          <div class=secondQuete>
            <img src="../images/queteAlbum.png" align="left" id="secondQuete"> The Beatles
            <br> A Hard Day’s Night • 2:11
          </div>
        </li>
        <li class="thirdList">
          <div class=thirdQuete>
            <img src="../images/queteAlbum.png" align="left" id="thirdQuete"> The Beatles
            <br> A Hard Day’s Night • 2:11
          </div>
        </li>
        <li class="fourthList">
          <div class=fourthQuete>
            <img src="../images/queteAlbum.png" align="left" id="fourthQuete"> The Beatles
            <br> A Hard Day’s Night • 2:11
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="title">
    <h2 id="title">Little Boxes</h2>
  </div>
  <div class="artist">
    <h2 id="artist">Malvina Reynolds</h2>
  </div>
  <div class="progress"><img src="../images/Progress.png" id="progress"></div>
  <div class=“middle1”>
  <img src="../images/Middle-02.svg" class="image2">
  <button type="button" class="btn" id="button1" data-toggle="modal" data-target="#exampleModal">Add a Song</button>
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Song Lists</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul class="songList" id="songList">
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/queteAlbum.png" align="left" id="list">
                <p id="p1">
                  <br> Blink-182
                  <br> All the Small Things • 2:48
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Summer Of '69 - Bryan Adams.jpg" align="left" id="list">
                <p id="p2">
                  <br> Bryan Adams
                  <br> Summer Of ’69 • 3:36
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/The Distance - Cake.jpg" align="left" id="list">
                <p id="p3">
                  <br> Cake
                  <br> The Distance • 3:01
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Have Faith In Me - A Day to Remember.jpg" align="left" id="list">
                <p id="p4">
                  <br> A Day to Remember
                  <br> Have Faith In Me • 3:09
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Doors Unlocked and Open - Death Cab for Cutie.jpg" align="left" id="list">
                <p id="p1">
                  <br> Death Cab for Cutie
                  <br> Doors Unlocked and Open • 5:37
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/I'm Shipping Up to Boston - Dropkick Murphy's.jpg" align="left" id="list">
                <p id="p2">
                  <br> Dropkick Murphys
                  <br> I’m Shipping Up to Boston • 2:47
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Acid Jazz Singer - The Fratellis.jpg" align="left" id="list">
                <p id="p3">
                  <br> The Fratellies
                  <br> Acid Jazz Signer • 4:22
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Superman - Goldfinger.jpg" align="left" id="list">
                <p id="p4">
                  <br> Goldfinger
                  <br> Superman • 3:05
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/99 Red Balloons - Goldfinger.jpg" align="left" id="list">
                <p id="p1">
                  <br> Goldfinger
                  <br> 99 Red Balloons • 4:02
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Red Wine, Mistakes, Mythology - Jack Johnson.jpg" align="left" id="list">
                <p id="p2">
                  <br> Jack Johnson
                  <br> Red Wine, Mistakes, Mythol.. • 4:03
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Voodoo Child - Jimi Hendrix.jpg" align="left" id="list">
                <p id="p3">
                  <br> The Jimi Hendrix
                  <br> Voodoo Child • 15:00
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Oh, Emily - Jukebox the Ghost.jpeg" align="left" id="list">
                <p id="p4">
                  <br> Jukebox The Ghost
                  <br> Oh, Emily • 4:04
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Seaside - The Kooks.jpg" align="left" id="list">
                <p id="p1">
                  <br> The kooks
                  <br> Seaside • 1:50
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/My Own Worst Enemy - Lit.jpg" align="left" id="list">
                <p id="p2">
                  <br> Lit
                  <br> My Own Worst Enemy • 2:52
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Everything Is Alright - Motion City Soundtrack.jpg" align="left" id="list">
                <p id="p3">
                  <br> Motion City Sound
                  <br> Everything Is Alright • 3:28
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Trainwreck - New Found Glory.jpg" align="left" id="list">
                <p id="p4">
                  <br> New Found Glory
                  <br> Trainwreck • 2:58
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Photography - The Starting Line.jpg" align="left" id="list">
                <p id="p1">
                  <br> The Starting Line
                  <br> Photography • 6:26
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Get Ready - Sublime.jpg" align="left" id="list">
                <p id="p2">
                  <br> Sublime
                  <br> Get Ready • 4:51
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Welcome To Tally Hall - Tally Hall.jpeg" align="left" id="list">
                <p id="p3">
                  <br> Tally Hall
                  <br> Welcome To Tally Hall • 5:10
                </p>
              </div>
            </li>
            <li class="list">
              <div class="listLayout">
                <!-- Default unchecked -->
                <div class="checkbox">
                  <input type="checkbox" class="input" id="defaultUnchecked" style="margin-top: 27px">
                  <label class="custom-control-label" for="defaultUnchecked"></label>
                </div>
                <img src="../images/Album Artwork/Oxford Comma - Vampire Weekend.jpeg" align="left" id="list">
                <p id="p4">
                  <br> Vampire Weekend
                  <br> Oxford comma • 3:24
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="modal-footer">
          <p id="payment">Total: </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn-primary">Save Quete</button>
        </div>
      </div>
    </div>
  </div>
  <button type="button" class="btn" id="button2">Clear Queue</button>
  <div class=“middle2”><img src="../images/Middle-03.svg" class="image3"></div>
  <div class=“bottom”><img src="../images/Bottom-04.svg" class="image4"></div>

</div>
</template>


<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component({
  name: 'VueApp',
})
export default class VueApp extends Vue {}
</script>
