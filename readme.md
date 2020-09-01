There is this great free TV channel that shows Star Trek every night, but now I'm moving and I packed my TV.

I can still watch Star Trek TNG online, but the beauty of watching it on TV is that they pick the episode for me, and I don't have to waste time in the rabbit hole.

So I made [this](http://www.tuskerette.com/projects/tng-episode-picker)

You're welcome :)

### To do
- add test with jest, just because

I abandoned the idea of developing this feature because I considered it 
not worth the effort for this little page.
The reasoning behind the choice: 
this is a static page and would be overkill to add a whole framework, or react or gatsbyjs...
or a whole node backend.
In order to be able to require a file in jest I went down the path of using a simple 'requirejs'.
It turns out that jest does not support jest, and it won't cause it is so 2004...and therefore, although I temporarily
added a package.json, the jest file was not able to require (load) app.js.
- link to watch on netflix/amazon prime video (?)

### Done
- fetch episode title/info from some API -- yes from [stapi.co](http://stapi.co)!

