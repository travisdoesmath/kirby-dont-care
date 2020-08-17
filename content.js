const targetNode = document.body;

const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer) {
    for (let i = 0; i < mutationsList.length; i++) {
        if (mutationsList[i].addedNodes.length > 0) {
            for (let j = 0; j < mutationsList[i].addedNodes.length; j++) {
                node = mutationsList[i].addedNodes[j];
                if (node.getElementsByTagName) {
                    addedImages = node.getElementsByTagName('img');
                    for (var k = 0; k < addedImages.length; k++) {
                        var element = addedImages[k];

                        let care = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 180 180' %3e %3cdefs%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='50%25' id='c'%3e %3cstop stop-color='%23F08423' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23F08423' stop-opacity='.34' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='44.086%25' fx='50%25' fy='44.086%25' r='57.412%25' gradientTransform='matrix(-1 0 0 -.83877 1 .81)' id='d'%3e %3cstop stop-color='%23FFE874' offset='0%25'/%3e %3cstop stop-color='%23FFE368' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='10.82%25' cy='52.019%25' fx='10.82%25' fy='52.019%25' r='10.077%25' gradientTransform='matrix(.91249 .4091 -.31644 .7058 .174 .109)' id='e'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.131%25' cy='76.545%25' fx='74.131%25' fy='76.545%25' r='28.284%25' gradientTransform='rotate(-38.243 1.4 .537) scale(1 .40312)' id='f'%3e %3cstop stop-color='%23F28A2D' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%23F28A2D' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='31.849%25' cy='12.675%25' fx='31.849%25' fy='12.675%25' r='10.743%25' gradientTransform='matrix(.98371 -.17976 .03575 .19562 0 .16)' id='g'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='68.023%25' cy='12.637%25' fx='68.023%25' fy='12.637%25' r='12.093%25' gradientTransform='rotate(11.848 .192 .076) scale(1 .19886)' id='h'%3e %3cstop stop-color='%23D45F00' stop-opacity='.25' offset='0%25'/%3e %3cstop stop-color='%23D45F00' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.709%25' cy='66.964%25' fx='50.709%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.163 1.117)' id='j'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='49.239%25' cy='66.964%25' fx='49.239%25' fy='66.964%25' r='87.22%25' gradientTransform='matrix(0 -.8825 1 0 -.177 1.104)' id='k'%3e %3cstop stop-color='%233B446B' offset='0%25'/%3e %3cstop stop-color='%23202340' offset='68.84%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='48.317%25' cy='42.726%25' fx='48.317%25' fy='42.726%25' r='29.766%25' gradientTransform='matrix(-.09519 -.96847 1.71516 -1.15488 -.204 1.389)' id='l'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50%25' cy='29.807%25' fx='50%25' fy='29.807%25' r='31.377%25' gradientTransform='matrix(.07236 -.9819 2.22613 1.12405 -.2 .454)' id='m'%3e %3cstop stop-color='%23E38200' offset='0%25'/%3e %3cstop stop-color='%23CD6700' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='73.646%25' cy='44.274%25' fx='73.646%25' fy='44.274%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .764 .598)' id='p'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='26.749%25' cy='29.688%25' fx='26.749%25' fy='29.688%25' r='29.002%25' gradientTransform='scale(.92955 1) rotate(20.36 .278 .353)' id='q'%3e %3cstop stop-color='%23FF7091' stop-opacity='.7' offset='0%25'/%3e %3cstop stop-color='%23FE6D8E' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='23.798%25' cy='53.35%25' fx='23.798%25' fy='53.35%25' r='24.89%25' gradientTransform='matrix(-.18738 .97947 -1.25372 -.27758 .951 .449)' id='r'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.94' offset='26.692%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='97.063%25' cy='54.555%25' fx='97.063%25' fy='54.555%25' r='15.021%25' gradientTransform='matrix(.8002 .50886 -.59365 1.08039 .518 -.538)' id='s'%3e %3cstop stop-color='%23C71C08' stop-opacity='.75' offset='0%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='.704' offset='53.056%25'/%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='4.056%25' cy='24.23%25' fx='4.056%25' fy='24.23%25' r='13.05%25' gradientTransform='matrix(.8728 -.3441 .41218 1.20997 -.095 -.037)' id='t'%3e %3cstop stop-color='%239C0600' stop-opacity='.5' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.473' offset='31.614%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='74.586%25' cy='77.013%25' fx='74.586%25' fy='77.013%25' r='17.563%25' gradientTransform='matrix(.77041 .55955 -.56333 .89765 .605 -.339)' id='u'%3e %3cstop stop-color='%239C0600' stop-opacity='.999' offset='0%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.934' offset='45.7%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='.803' offset='59.211%25'/%3e %3cstop stop-color='%239C0600' stop-opacity='0' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='50.001%25' cy='50%25' fx='50.001%25' fy='50%25' r='51.087%25' gradientTransform='matrix(-.3809 .91219 -.97139 -.46943 1.176 .279)' id='v'%3e %3cstop stop-color='%23C71C08' stop-opacity='0' offset='0%25'/%3e %3cstop stop-color='%23C71C08' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='2.243%25' cy='4.089%25' fx='2.243%25' fy='4.089%25' r='122.873%25' gradientTransform='scale(.78523 1) rotate(36.406 .025 .05)' id='x'%3e %3cstop stop-color='%23EDA83A' offset='0%25'/%3e %3cstop stop-color='%23FFDC5E' offset='100%25'/%3e %3c/radialGradient%3e %3cradialGradient cx='100%25' cy='7.011%25' fx='100%25' fy='7.011%25' r='105.039%25' gradientTransform='scale(-.90713 -1) rotate(-45.799 -.217 2.489)' id='z'%3e %3cstop stop-color='%23F4B248' offset='0%25'/%3e %3cstop stop-color='%23FFDD5F' offset='100%25'/%3e %3c/radialGradient%3e %3clinearGradient x1='50%25' y1='95.035%25' x2='50%25' y2='7.417%25' id='b'%3e %3cstop stop-color='%23F28A2D' offset='0%25'/%3e %3cstop stop-color='%23FDE86F' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='49.985%25' y1='-40.061%25' x2='49.985%25' y2='111.909%25' id='i'%3e %3cstop stop-color='%23482314' offset='0%25'/%3e %3cstop stop-color='%239A4111' offset='100%25'/%3e %3c/linearGradient%3e %3clinearGradient x1='52.727%25' y1='31.334%25' x2='28.964%25' y2='102.251%25' id='o'%3e %3cstop stop-color='%23F34462' offset='0%25'/%3e %3cstop stop-color='%23CC0820' offset='100%25'/%3e %3c/linearGradient%3e %3cpath d='M180 90c0 49.71-40.29 90-90 90S0 139.71 0 90 40.29 0 90 0s90 40.29 90 90z' id='a'/%3e %3cpath d='M108.947 95.828c-23.47-7.285-31.71 8.844-31.71 8.844s2.376-17.954-21.095-25.24c-22.57-7.004-36.253 13.757-37.307 26.812-2.264 28.103 22.134 59.996 31.26 70.86a8.062 8.062 0 008.34 2.584c13.697-3.777 51.904-16.242 66.009-40.667 6.54-11.328 7.06-36.188-15.497-43.193z' id='n'/%3e %3cpath d='M180.642 90c0 49.71-40.289 90-90 90-49.71 0-90-40.29-90-90s40.29-90 90-90c49.711 0 90 40.29 90 90z' id='w'/%3e %3c/defs%3e %3cg fill='none' fill-rule='evenodd'%3e %3cg fill-rule='nonzero'%3e %3cg transform='translate(.005 -.004)'%3e %3cuse fill='url(%23b)' xlink:href='%23a'/%3e %3cuse fill='url(%23c)' xlink:href='%23a'/%3e %3cuse fill='url(%23d)' xlink:href='%23a'/%3e %3cuse fill='url(%23e)' xlink:href='%23a'/%3e %3cuse fill='url(%23f)' xlink:href='%23a'/%3e %3cuse fill='url(%23g)' xlink:href='%23a'/%3e %3cuse fill='url(%23h)' xlink:href='%23a'/%3e %3c/g%3e %3cpath d='M109.013 66.234c-1.14-3.051-36.872-3.051-38.011 0-1.322 3.558 6.806 8.396 19.012 8.255 12.192.14 20.306-4.71 18.999-8.255z' fill='url(%23i)' transform='translate(.005 -.004)'/%3e %3cpath d='M68.006 46.125c.014 7.566-4.823 9.788-11.995 10.702-7.102 1.068-11.883-2.068-11.995-10.702-.099-7.256 3.81-16.116 11.995-16.284 8.17.168 11.981 9.028 11.995 16.284z' fill='url(%23j)' transform='translate(.005 -.004)'/%3e %3cpath d='M54.807 35.054c1.18 1.378.97 3.769-.479 5.358-1.448 1.575-3.571 1.744-4.753.366-1.181-1.378-.97-3.77.478-5.344 1.449-1.59 3.572-1.744 4.754-.38z' fill='%234E506A'/%3e %3cpath d='M112.022 46.125c-.014 7.566 4.823 9.788 11.995 10.702 7.102 1.068 11.883-2.068 11.995-10.702.099-7.256-3.81-16.116-11.995-16.284-8.184.168-11.995 9.028-11.995 16.284z' fill='url(%23k)' transform='translate(.005 -.004)'/%3e %3cpath d='M124.078 34.52c.957 1.547.38 3.881-1.293 5.217-1.674 1.336-3.797 1.181-4.753-.366-.957-1.546-.38-3.88 1.293-5.217 1.66-1.336 3.797-1.181 4.753.366z' fill='%234E506A'/%3e %3cpath d='M37.969 23.344c-2.349 1.983-.45 6.047 3.515 4.19 6.328-2.967 19.899-6.623 31.824-5.287 3.164.351 4.19-.113 3.487-4.022-.689-3.853-4.33-6.37-13.387-5.26-14.035 1.716-23.09 8.396-25.44 10.379z' fill='url(%23l)' transform='translate(.005 -.004)'/%3e %3cpath d='M116.592 12.952c-9.056-1.111-12.698 1.42-13.387 5.259-.703 3.91.323 4.373 3.487 4.022 11.925-1.336 25.481 2.32 31.824 5.287 3.965 1.857 5.864-2.207 3.515-4.19-2.348-1.97-11.404-8.649-25.439-10.378z' fill='url(%23m)' transform='translate(.005 -.004)'/%3e %3c/g%3e %3cg fill-rule='nonzero'%3e %3cuse fill='url(%23o)' xlink:href='%23n'/%3e %3cuse fill='url(%23p)' xlink:href='%23n'/%3e %3cuse fill='url(%23q)' xlink:href='%23n'/%3e %3cuse fill='url(%23r)' xlink:href='%23n'/%3e %3cuse fill='url(%23s)' xlink:href='%23n'/%3e %3cuse fill='url(%23t)' xlink:href='%23n'/%3e %3cuse fill='url(%23u)' xlink:href='%23n'/%3e %3cuse fill-opacity='.5' fill='url(%23v)' xlink:href='%23n'/%3e %3c/g%3e %3cg transform='translate(-.637 -.004)'%3e %3cmask id='y' fill='white'%3e %3cuse xlink:href='%23w'/%3e %3c/mask%3e %3cpath d='M15.52 86.231C9.642 80.508-.708 77.892-1.89 91.153c-.927 10.364 3.93 27.694 16.234 37.763C45.282 154.23 74.742 139.667 75.628 122c.699-13.932-15.502-12.327-20.648-12.045-.352.014-.507-.45-.197-.647a48.147 48.147 0 004.725-3.488c4.036-3.403 1.968-9.31-3.67-7.607-.858.253-14.583 4.359-23.288 1.068-9.872-3.726-11.053-7.214-17.03-13.05z' fill='url(%23x)' fill-rule='nonzero' mask='url(%23y)'/%3e %3cpath d='M161.081 88.2c3.502-6.778 9.066-4.401 12.194-3.359 4.61 1.537 7.353 4.4 7.353 11.572 0 17.001-2.812 32.765-17.002 48.6-25.987 28.982-69.935 25.143-73.675 6.862-3.094-15.16 13.066-16.678 18.34-17.381.365-.042.421-.605.098-.746a46.169 46.169 0 01-5.4-2.896c-5.444-3.403-3.989-10.051 2.405-9.07 6.806 1.012 15.23 2.924 22.486 2.207 21.009-2.11 24.975-19.87 33.201-35.789z' fill='url(%23z)' fill-rule='nonzero' mask='url(%23y)'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e"
                        if (element.src && (element.src == care || element.src == "https://static.xx.fbcdn.net/rsrc.php/v3/yR/r/QTVmPoFjk5O.png" || element.src == "https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/p_-PTXnrxIv.png")) {
                            element.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 72 72'><path fill='rgb(217, 81, 95)' d='M31.22,54.6c0.08,1.09,0.08,2.17,0,3.26c-0.23,3.1-0.83,6.11-2.23,8.92c-0.59,1.19-1.34,2.27-2.41,3.09	c-0.56,0.43-1.18,0.72-1.86,0.88c-0.08,0.02-0.08,0.02-0.13,0.1c-0.05,0-0.1,0-0.15,0c0.01-0.03,0-0.04-0.03-0.04c-0.03,0-0.04,0.02-0.03,0.04c-0.38,0-0.75,0-1.13,0c-0.05-0.08-0.1-0.08-0.15,0c-0.05,0-0.1,0-0.15,0c0.02-0.13-0.08-0.09-0.14-0.1c-1.44-0.21-2.77-0.73-4.01-1.5c-1.87-1.16-3.35-2.73-4.66-4.48c-1.75-2.35-3.09-4.94-4.33-7.58c-1.29-2.75-2.17-5.6-2.41-8.64c-0.16-2.01-0.1-4,0.23-5.99c0.66,0.86,1.32,1.71,2.05,2.5c4.27,4.59,9.51,7.47,15.61,8.82c1.73,0.38,3.47,0.61,5.24,0.68C30.76,54.56,30.99,54.58,31.22,54.6z'/><path fill='rgb(246, 179, 208)' d='M9.82,21.39c0.08-0.09,0.13-0.19,0.16-0.31c0.14-0.64,0.24-1.3,0.29-1.95c0.09-1.19,0.26-2.36,0.6-3.51c0.83-2.82,2.13-5.41,3.74-7.85c1.41-2.14,3.02-4.11,5.05-5.71c1.21-0.95,2.51-1.71,4.06-1.97c0.05-0.01,0.13,0,0.08-0.09c0.51,0,1.03,0,1.54,0c0.05,0.09,0.06,0.09,0.16,0.1c1.14,0.18,2.17,0.61,3.06,1.34c1.23,1.01,1.98,2.33,2.49,3.82c0.62,1.83,0.84,3.73,0.83,5.66c0,0.25,0.03,0.49,0.12,0.73c0.05,0.13,0.12,0.18,0.27,0.18c0.33,0,0.67,0.03,1,0.04'/><path fill='rgb(246, 179, 208)' d='M34.23,65.57c-0.59,0.01-1.19,0.01-1.78,0.02c-0.23-0.02-0.46-0.04-0.69-0.05c-1.77-0.07-3.51-0.3-5.24-0.68c-6.1-1.35-11.34-4.23-15.61-8.82c-0.74-0.79-1.4-1.64-2.05-2.5c-0.05-0.09-0.1-0.18-0.16-0.26c-2.12-3.01-3.56-6.33-4.31-9.93c-0.24-1.17-0.41-2.36-0.49-3.55c0-0.07,0.05-0.18-0.09-0.19c0-1.25,0-2.5,0-3.75c0.09-0.06,0.09-0.06,0.1-0.24c0.1-1.86,0.35-3.7,0.74-5.51c1.21-5.58,3.69-10.5,7.45-14.82c3.4-3.91,14.2-9.81,23.45-9.52c2.29,0.13,4.53,0.53,6.71,1.25c7.8,2.54,13.55,7.49,17.26,14.8c1.41,2.78,2.27,5.74,2.69,8.83c0.02,0.17,0.11,0.23,0.23,0.29c1.66,0.84,3.22,1.81,4.57,3.1c1.23,1.18,2.2,2.52,2.53,4.25c0.01,0.04,0.01,0.12,0.09,0.05c0,0.69,0,1.37,0,2.06c-0.08,0.04-0.08,0.04-0.11,0.15c-0.5,2.26-1.74,3.94-3.87,4.92'/><path fill='rgb(243, 138, 184)' d='M21.52,28.19c-1.76-0.09-3.71-0.59-5.41-1.87c-0.38-0.29-0.73-0.63-0.94-1.08c-0.36-0.72-0.2-1.31,0.47-1.77c0.51-0.35,1.09-0.47,1.67-0.53c1.96-0.19,3.8,0.26,5.55,1.14c0.73,0.37,1.39,0.84,1.86,1.54c0.6,0.89,0.32,1.78-0.69,2.19C23.33,28.11,22.6,28.2,21.52,28.19z'/><path fill='rgb(148, 45, 43)' d='M29.03,36.17c0-0.4,0.04-0.96,0.16-1.51c0.34-1.53,1.32-2.38,2.89-2.55c1.44-0.15,2.82,0.15,4.17,0.61c1.59,0.53,3.12,1.17,4.38,2.33c0.68,0.62,1.26,1.32,1.63,2.18c0.3,0.69,0.33,1.38,0.01,2.07c-1.53,3.31-5.66,5.46-9.68,3.54c-1.54-0.74-2.44-2.08-3.02-3.64C29.23,38.27,29.06,37.32,29.03,36.17z'/><path fill='rgb(243, 138, 184)' d='M55.47,42.8c-1.07,0.01-2.01-0.4-2.92-0.91c-0.87-0.49-1.6-1.14-2.2-1.94c-0.39-0.52-0.67-1.09-0.71-1.78c-0.05-0.9,0.71-1.41,1.43-1.46c1.26-0.09,2.39,0.31,3.45,0.95c0.92,0.56,1.73,1.23,2.31,2.15c0.27,0.43,0.49,0.89,0.54,1.39c0.09,0.86-0.56,1.56-1.46,1.6C55.77,42.81,55.62,42.8,55.47,42.8z'/><path d='M43.41,30.58c0.03-1.82,0.4-3.54,0.88-5.25c0.56-2.01,1.16-4,2.05-5.89c0.26-0.55,0.56-1.06,0.93-1.54c1.33-1.71,3.11-1.02,3.96,0.04c0.55,0.69,0.79,1.5,0.9,2.36c0.23,1.81-0.04,3.59-0.48,5.34c-0.52,2.05-1.16,4.06-2.18,5.94c-0.39,0.71-0.84,1.37-1.44,1.92c-0.55,0.5-1.19,0.86-1.94,0.86c-1.49-0.01-2.19-0.82-2.52-2.13C43.43,31.66,43.42,31.1,43.41,30.58z'/><path fill='rgb(53, 76, 158)' d='M50.59,26.33c-0.57,1.86-1.19,3.68-2.26,5.31c-0.22,0.34-0.47,0.65-0.77,0.93c-0.55,0.5-1.16,0.85-1.93,0.63c-0.83-0.23-1.18-0.88-1.34-1.66c-0.17-0.85-0.11-1.7,0.01-2.55c0.28-1.97,0.88-3.87,1.54-5.74c0.01-0.03,0.03-0.06,0.07-0.09c-0.08,0.71-0.14,1.42-0.12,2.13c0.02,0.53,0.1,1.04,0.3,1.53c0.48,1.19,1.67,1.64,2.82,1.09c0.64-0.31,1.09-0.81,1.51-1.36C50.48,26.47,50.53,26.4,50.59,26.33z'/><path fill='rgb(255, 255, 255)' d='M47.12,21.32c0.01-0.91,0.25-1.74,0.83-2.46c0.96-1.19,2.4-1.05,3.12,0.3c0.69,1.3,0.46,3.2-0.52,4.29c-0.94,1.04-2.29,0.91-2.98-0.31C47.24,22.58,47.1,21.97,47.12,21.32z'/><path d='M39.17,14.69c0,1.51-0.35,2.96-0.79,4.4c-0.62,1.99-1.32,3.95-2.25,5.82c-0.47,0.94-1.01,1.82-1.83,2.51c-1.38,1.16-3.35,0.69-4.15-0.19c-0.58-0.65-0.78-1.43-0.82-2.27c-0.08-1.59,0.26-3.11,0.72-4.62c0.66-2.14,1.44-4.23,2.48-6.21c0.47-0.9,1.04-1.74,1.86-2.38c1.47-1.16,4.18-0.58,4.69,1.68C39.16,13.84,39.16,14.27,39.17,14.69z'/><path fill='rgb(53, 76, 158)' d='M31.92,18.63c0.04,0.54,0.04,1.08,0.18,1.6c0.26,0.95,0.83,1.58,1.84,1.7c0.56,0.07,1.07-0.14,1.52-0.46c0.74-0.52,1.24-1.25,1.69-2.02c0.16-0.27,0.31-0.55,0.48-0.83c-0.12,0.59-0.31,1.16-0.52,1.72c-0.6,1.65-1.26,3.28-2.18,4.79c-0.44,0.72-0.93,1.42-1.65,1.9c-0.59,0.4-1.22,0.55-1.9,0.2c-0.49-0.25-0.76-0.67-0.91-1.18c-0.22-0.79-0.17-1.6-0.05-2.39c0.25-1.71,0.8-3.33,1.41-4.94C31.85,18.68,31.85,18.63,31.92,18.63z'/><path fill='rgb(255, 255, 255)' d='M33.29,15.65c0.04-1.21,0.44-2.28,1.37-3.09c1.3-1.14,2.97-0.69,3.52,0.96c0.47,1.42-0.05,3.28-1.2,4.25c-1.44,1.22-3.24,0.57-3.61-1.31C33.32,16.2,33.29,15.93,33.29,15.65z'/><path fill='rgb(241, 97, 96)' d='M35.92,43.23c-2.8-0.01-4.51-1.16-5.71-3.17c-0.62-1.04-1.01-2.17-1-3.4c0.01-1.44,1.08-2.78,2.43-3.07c0.73-0.16,1.46-0.06,2.18,0.1c1.5,0.33,2.99,0.73,4.32,1.55c0.69,0.42,1.31,0.93,1.79,1.59c1.1,1.49,1.03,3.11-0.17,4.52C38.64,42.64,37.21,43.2,35.92,43.23z'/><path fill='rgb(217, 81, 95)' d='M65.65,45.46c0.01,0.1,0.09,0.16,0.14,0.24c0.93,1.32,1.39,2.81,1.52,4.41c0.24,2.99-0.52,5.77-1.76,8.44c-1.29,2.77-3.04,5.22-5.19,7.38c-2.2,2.2-4.85,3.7-7.75,4.75c-2.36,0.86-4.79,1.34-7.31,1.32c-1.93-0.01-3.8-0.34-5.57-1.13c-2.38-1.06-4.13-2.77-5.31-5.08c-0.04-0.09-0.06-0.2-0.19-0.22c0.08-0.11-0.02-0.19-0.06-0.27c-0.73-1.62-1.16-3.33-1.32-5.1c-0.36-3.95,0.82-7.42,3.26-10.5c1.94-2.45,4.35-4.34,7.07-5.83c2.92-1.59,6.05-2.61,9.32-3.16c2.49-0.41,4.97-0.3,7.37,0.56c2.24,0.8,4.06,2.17,5.58,3.98C65.51,45.33,65.58,45.39,65.65,45.46z'/></svg>"
                        }
                    }
                }
            }
        }
    }
}

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);