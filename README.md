# tailwind-page

GitHub Pages: https://kyupin64.github.io/tailwind-page/

Git Log: [log.txt](log.txt)

Background image source: [papers.co](https://papers.co/desktop/ml11-lake-mountain-dark-calm-nature/)

Tailwind makes it very easy to add styles and make your website adaptable to different screen sizes just by adding classes. It's similar to Bootstrap, but in my opinion it's much easier to use and has many more class options so you don't have to use nearly as much customization.

I chose to replicate the first Netflix design, the home page. It's adaptive to screen sizes from a width of about 300px to 1540px. I used the icons from [Font Awesome 6](https://fontawesome.com/). The external navigation bar on the left side of the screen is hidden on smaller screens to make more room for the rest of the content. The left navigation section with trailers in the main content area is also hidden on smaller screens, and I used a small amount of JavaScript to make a button which you can click to open it. I relied on flexboxes to make it easy to lay out the page, which is very simple to implement using Tailwind. The two image sections at the bottom of the page are horizontally scrolling, and the images get more narrow to be in portrait mode on smaller screens. I also chose to use pictures of tv shows that I personally like for the fun of it. Most of the tv show titles are separate images which I positioned on top of the background image. For the trailers, I looked up some shows and movies that are coming out soon and picked some that looked interesting to me.

I didn't know how to download Tailwind and customize it, and I didn't know how useful it could be until I was already pretty much done with the project. I still figured out how to download it and got the config working, but I didn't really do much customization. I added a few things to the config file mostly to show I know how it works and for fun. Thanks for reading, and I hope you enjoy my website!


Key commits:

Add scrolling pictures to popcorn mania

    commit 6613767c9b177b13188fabb9623b3d9f4e448baa
    Author: kyupin64 <lewilks.321@gmail.com>
    Date:   Sun Feb 4 16:04:40 2024 -0700

    While I was still using placeholder images, these additions helped me build the structure of the main content section of the page. I was able to make these sections horizontally scrollable, which I think added a lot to the look of the page.


Scale for large screens, add sidebar

    commit 382ebcc3fdd0bc865a45d8069d155bfcc9085d71
    Author: kyupin64 <lewilks.321@gmail.com>
    Date:   Mon Feb 5 01:22:09 2024 -0700

    This commit massively improved my website. Since I started off designing it for smaller screens, I had to change a lot for it to be functional on larger screens. I didn't make a ton of changes for medium screens, but I reworked the layout of the page for large screens, so this commit was essential for this project.


Add config files, minor style changes

    commit 5254b4964a0e1440e594a27048a0e2010e8f1c4b
    Author: kyupin64 <lewilks.321@gmail.com>
    Date:   Sun Feb 11 15:58:12 2024 -0700

    This was one of the most important commits, not because it changed my page much, but because I finally figured out how to use the Tailwind CLI, which was giving me a lot of trouble.