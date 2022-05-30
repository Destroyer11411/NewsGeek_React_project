import React, { Component } from 'react'
import Newsitems from './NewsItems'

export class News extends Component {

  articles = [
    {
      "source": { "id": null, "name": "Space.com" },
      "author": "Tariq Malik",
      "title": "How to watch the potential tau Herculids meteor storm live online tonight - Space.com",
      "description": "The new meteor shower could amaze or fizzle out completely. But at least you can find out online.",
      "url": "https://www.space.com/meteor-storm-tau-herculids-shower-webcast",
      "urlToImage": "https://cdn.mos.cms.futurecdn.net/qwRjpY99RTXuGb26b7kGEN-1200-80.jpg",
      "publishedAt": "2022-05-30T12:32:56Z",
      "content": "A brand-new meteor shower could light up tonight's Memorial Day holiday sky on Monday and Tuesday (May 30-31) or it may be a big bust. But either way, you'll be able to watch it live online. \r\nCalled… [+3801 chars]"
    },
    {
      "source": { "id": null, "name": "KETV Omaha" },
      "author": null,
      "title": "Lincoln police: 2 dead, 19 injured after cars crash and veer into crowd - KETV Omaha",
      "description": "Police: O Street from 48th to 56th streets shut down in both directions",
      "url": "https://www.ketv.com/article/lincoln-police-2-dead-19-injured-after-cars-crash-and-roll-into-crowd/40138101",
      "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/lincoln-fatal-crash-1653892542.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      "publishedAt": "2022-05-30T12:20:00Z",
      "content": "LINCOLN, Neb. —Lincoln police confirmed two people were killed and 19 people were injured after two cars collided and went into a crowd Sunday night.\r\nCapt. Max Hubka with LPD said the crash happened… [+1285 chars]"
    },
    {
      "source": { "id": "reuters", "name": "Reuters" },
      "author": null,
      "title": "Mona Lisa left unharmed but smeared in cream in climate protest stunt - Reuters",
      "description": "The Mona Lisa was left shaken but unharmed on Sunday when a visitor to the Louvre tried to smash the glass protecting the world's most famous painting before smearing cream across its surface in an apparent climate-related publicity stunt.",
      "url": "https://www.reuters.com/world/europe/mona-lisa-left-unharmed-smeared-cream-climate-protest-stunt-2022-05-30/",
      "urlToImage": "https://www.reuters.com/resizer/1f4LX7v766S-tzNs_eVO_W7sb9g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/R66YQQCYFJNCTPYIARHD3OECMA.jpg",
      "publishedAt": "2022-05-30T12:14:00Z",
      "content": "PARIS, May 30 (Reuters) - The Mona Lisa was left shaken but unharmed on Sunday when a visitor to the Louvre tried to smash the glass protecting the world's most famous painting before smearing cream … [+1575 chars]"
    },
    {
      "source": { "id": "business-insider", "name": "Business Insider" },
      "author": "Weilun Soon",
      "title": "Researcher says her avatar was raped on Meta's metaverse platform - Business Insider",
      "description": "Within an hour of logging on to Meta's Horizon Worlds, a researcher said her avatar was raped, according to a report.",
      "url": "https://www.businessinsider.com/researcher-claims-her-avatar-was-raped-on-metas-metaverse-platform-2022-5",
      "urlToImage": "https://i.insider.com/628cd409b0a8be00186042d6?width=1200&format=jpeg",
      "publishedAt": "2022-05-30T12:00:00Z",
      "content": "A researcher entered the metaverse wanting to study users' behavior on Meta's social-networking platform Horizon World. But within an hour after she donned her Oculus virtual-reality headset, she say… [+5389 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Anna Cooban and James Frater, CNN Business",
      "title": "European unity against Russia tested as talks on oil embargo drag on - CNN",
      "description": "Europe's united front against Moscow is being put to the test as countries struggle to agree a ban on Russian oil imports.",
      "url": "https://www.cnn.com/2022/05/30/energy/europe-russia-oil-embargo/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220530061134-germany-russia-oil-050522-super-tease.jpg",
      "publishedAt": "2022-05-30T11:12:00Z",
      "content": null
    },
    {
      "source": { "id": null, "name": "As.com" },
      "author": "Oliver Povey",
      "title": "What is the expected date of the verdict in the Johnny Depp v Amber Heard trial? - AS USA",
      "description": "Originally set to end this week, the verdict won’t be due until the end of the month due to the amount of evidence that has and still needs to be given.",
      "url": "https://en.as.com/latest_news/what-is-the-expected-date-of-the-veredict-in-the-johnny-depp-v-amber-heard-trial-n/",
      "urlToImage": "https://img.asmedia.epimg.net/resizer/-VuupSjw-6KqgG9SUi7nwFWHonw=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/BLLQ274BAH2ZPEXE7IQXE7DODM.jpg",
      "publishedAt": "2022-05-30T10:35:29Z",
      "content": "Last Friday May 27 the jury started deliberation in the Johnny Depp vs Amber Heard defamation case. Soon we should expect a veredict that will bring this trial to and end. However, it seems that we w… [+3071 chars]"
    },
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "Yuras Karmanau",
      "title": "Russian troops entering Sievierodonetsk in eastern Ukraine - The Associated Press",
      "description": "KRAMATORSK, Ukraine (AP) — The Russian-battered eastern Ukrainian city of Sievierodonetsk appeared to be on the brink of becoming another Mariupol on Monday as the mayor told The Associated Press that Russian troops have entered, power and communications have…",
      "url": "https://apnews.com/article/russia-ukraine-zelenskyy-government-and-politics-moscow-a82d4539f85e472f9a36a378413b748c",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/b35c284d3326469995274c989db98487/3000.jpeg",
      "publishedAt": "2022-05-30T09:56:15Z",
      "content": "KRAMATORSK, Ukraine (AP) The Russian-battered eastern Ukrainian city of Sievierodonetsk appeared to be on the brink of becoming another Mariupol on Monday as the mayor told The Associated Press that … [+5302 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Matias Grez, CNN",
      "title": "The Boston Celtics beat the Miami Heat in Game 7 to reach NBA Finals for first time in 12 years - CNN",
      "description": "The Boston Celtics secured a nerve-wracking 100-96 Game 7 victory over the Miami Heat to reach the NBA Finals for the first time in 12 years.",
      "url": "https://www.cnn.com/2022/05/30/sport/boston-celtics-beat-miami-heat-advances-to-nba-finals-spt-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220530092756-boston-celtics-celebrate-super-tease.jpg",
      "publishedAt": "2022-05-30T09:54:00Z",
      "content": null
    },
    {
      "source": { "id": "the-verge", "name": "The Verge" },
      "author": "Jon Porter",
      "title": "Apple's RealityOS for rumored headset appears in trademark application - The Verge",
      "description": "RealityOS has been trademarked. It suggests that Apple’s long-rumored virtual reality and augmented reality headset could be nearing its official announcement ahead of Apple’s developer conference next week.",
      "url": "https://www.theverge.com/2022/5/30/23147213/realityos-os-ros-trademark-apple-virtual-augmented-reality-headset",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/W4T_cOXSKByy6vwN8c-FcH-1S4A=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/11477051/acastro_180604_1777_apple_wwdc_0003.jpg",
      "publishedAt": "2022-05-30T09:16:43Z",
      "content": "Suggesting an announcement could be here soon\r\nIllustration by Alex Castro / The Verge\r\nRealityOS the name Apple is reportedly using for the operating system running on its rumored virtual and augmen… [+3357 chars]"
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Michelle Watson, CNN",
      "title": "1 person is dead and another is missing after a boat carrying more than a dozen people overturned in Colorado's Lake Pueblo State Park - CNN",
      "description": "One person is dead and another person is missing after a boat carrying more than a dozen people overturned in Lake Pueblo State Park in Colorado, park officials said.",
      "url": "https://www.cnn.com/2022/05/30/us/lake-pueblo-colorado-boat-accident/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220530032001-lake-pueblo-boat-accident-map-super-tease.jpg",
      "publishedAt": "2022-05-30T08:38:00Z",
      "content": null
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Heather Chen and Esha Mitra, CNN",
      "title": "Indian rapper turned politician Sidhu Moose Wala shot dead - CNN",
      "description": "The renowned Indian rapper-turned politician was shot dead by unidentified assailants at a village in Punjab state. He was 28 years old.",
      "url": "https://www.cnn.com/2022/05/30/asia/rapper-sidhu-moose-wala-death-india-punjab-hnk-intl/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220529221341-rapper-sidhu-moose-wala-super-tease.jpg",
      "publishedAt": "2022-05-30T08:35:00Z",
      "content": null
    },
    {
      "source": { "id": "cnn", "name": "CNN" },
      "author": "Travis Caldwell, CNN",
      "title": "9-year-old describes escaping out a window during the Uvalde school shooting as anger mounts over law enforcement's response - CNN",
      "description": "As a gunman entered an elementary school in Uvalde, Texas, last week and began firing, one student says his teacher -- wounded by bullets -- had to text 911 for help after a phone call did not go through.",
      "url": "https://www.cnn.com/2022/05/30/us/uvalde-texas-elementary-school-shooting-monday/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220530002649-uvalde-texas-elementary-school-shooting-monday-super-tease.jpg",
      "publishedAt": "2022-05-30T08:19:00Z",
      "content": "(CNN)As a gunman entered an elementary school in Uvalde, Texas, last week and began firing, one student says his teacher -- wounded by bullets -- had to text 911 for help after a phone call did not g… [+6766 chars]"
    },
    {
      "source": { "id": null, "name": "Yahoo Entertainment" },
      "author": "Ben Rohrbach",
      "title": "Al Horford and Celtics he mentored making most of second chance at first NBA title - Yahoo Sports",
      "description": "Horford anchored a dominant defensive effort, and the three players whose careers he has shepherded in Boston provided enough offense to beat the Heat and...",
      "url": "https://sports.yahoo.com/al-horford-and-celtics-he-mentored-making-most-of-second-chance-at-first-nba-title-080915990.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/.4UD_g5XWcT1kMdEXtrBag--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-05/c19b6580-dfee-11ec-bdeb-51c58fb48893",
      "publishedAt": "2022-05-30T08:09:15Z",
      "content": "Following a dysfunctional 2018-19 season that ended with Kyrie Irving sabotaging the Boston Celtics in a second-round playoff exit and reneging on his commitment to re-sign with the storied franchise… [+7913 chars]"
    },
    {
      "source": { "id": "associated-press", "name": "Associated Press" },
      "author": "Aileen Torres-bennett",
      "title": "As China seeks big Pacific deal, many in Fiji see benefits - The Associated Press",
      "description": "SUVA, Fiji (AP) — China fell short Monday on a bold plan to have 10 Pacific nations endorse a sweeping new agreement  covering everything from security to fisheries as some in the region expressed deep concerns.",
      "url": "https://apnews.com/article/suva-fiji-wang-yi-china-bb340b0386872a711ef6bb6c6468a73f",
      "urlToImage": "https://storage.googleapis.com/afs-prod/media/a72fb6a612794778be622e4250e6b69b/3000.jpeg",
      "publishedAt": "2022-05-30T08:02:00Z",
      "content": "SUVA, Fiji (AP) China fell short Monday on a bold plan to have 10 Pacific nations endorse a sweeping new agreement covering everything from security to fisheries as some in the region expressed deep … [+6494 chars]"
    },
    {
      "source": { "id": null, "name": "Daily Beast" },
      "author": "David Axe",
      "title": "Monkeypox Is Spreading During Sex—and That Is a Relief - The Daily Beast",
      "description": "Scientists were concerned that cases of monkeypox springing up across the world suggested the virus had gone airborne—and that could have caused another pandemic.",
      "url": "https://www.thedailybeast.com/monkeypox-is-spreading-during-sex-and-that-is-actually-a-relief",
      "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_675,w_1200,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1653729430/052722-axe-monkeypox-hero_xhujmn",
      "publishedAt": "2022-05-30T07:43:55Z",
      "content": "Were starting to get a handle on how monkeypox is spreading in this latest outbreak of the deadly disease.\r\nThe pox spreads through close physical contact. Especially during sex.\r\nBelieve it or not, … [+5309 chars]"
    },
    {
      "source": { "id": null, "name": "New York Post" },
      "author": "Fox News",
      "title": "President Biden suggests razing Texas elementary school where 21 people were killed, state senator says - New York Post ",
      "description": "President Biden told a local lawmaker while visiting Uvalde on Sunday that the federal government may provide resources to raze Robb Elementary School, where 19 children and two teachers were shot …",
      "url": "https://nypost.com/2022/05/30/president-biden-suggests-razing-robb-elementary-school-where-21-people-were-killed-state-senator-says/",
      "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/05/APTOPIX-Biden-Texas-School-Shooting.jpg?quality=75&strip=all&w=1024",
      "publishedAt": "2022-05-30T07:29:00Z",
      "content": "President Biden told a local lawmaker while visiting Uvalde on Sunday that the federal government may provide resources to raze Robb Elementary School, where 19 children and two teachers were shot an… [+1777 chars]"
    },
    {
      "source": { "id": "the-washington-post", "name": "The Washington Post" },
      "author": "Thira Lal Bhusal, Rachel Pannett, Gerry Shih",
      "title": "At least 20 found dead in Nepal plane crash - The Washington Post",
      "description": "An army spokesperson posted a photo of the crash site on Twitter on Monday. The plane had been carrying 22 people.",
      "url": "https://www.washingtonpost.com/world/2022/05/30/nepal-crash-tara-air-plane/",
      "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/I57XTVG7E4I6ZPBVVEOQVFESHM.jpg&w=1440",
      "publishedAt": "2022-05-30T07:27:00Z",
      "content": "Placeholder while article actions load\r\nKATHMANDU, Nepal Search-and-rescue officials in Nepalhave recovered most of the bodies at the site of a plane crash in the Himalayan Mountains on Monday, one d… [+3085 chars]"
    },
    {
      "source": { "id": null, "name": "Fox Business" },
      "author": "Lucas Manfredi",
      "title": "Jobs report, GameStop earnings, home prices top week ahead - Fox Business",
      "description": "FOX Business takes a look at the upcoming events that are likely to move financial markets in the coming days, including earnings reports and a union vote.",
      "url": "https://www.foxbusiness.com/markets/jobs-report-gamestop-earnings-home-prices-week-ahead",
      "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/03/0/0/How-a-giant-ship-stuck-in-the-Suez-Canal-is-disrupting-global-trade-1.jpg?ve=1&tl=1",
      "publishedAt": "2022-05-30T06:03:59Z",
      "content": "Though the New York Stock Exchange will be closed Monday in observance of the Memorial Day holiday, investors will still have another jam-packed week of corporate earnings and key economic data relat… [+6750 chars]"
    },
    {
      "source": { "id": "axios", "name": "Axios" },
      "author": "Sara Fischer",
      "title": "\"Top Gun: Maverick\" draws biggest weekend opener ever for Tom Cruise - Axios",
      "description": "The film debuted 28% above Cruise's last big hit.",
      "url": "https://www.axios.com/2022/05/30/top-gun-maverick-tom-cruise-box-office",
      "urlToImage": "https://images.axios.com/3KM9RA6X9UPrztvfjYAn8b-_LYo=/224x0:2140x1078/1366x768/2022/05/29/1653851629508.png",
      "publishedAt": "2022-05-30T05:30:50Z",
      "content": "Paramount and Skydances huge Memorial Day weekend opener for Top Gun: Maverick shows just how much audiences trust Tom Cruise to continue delivering at the box office, four decades into his career. \r… [+2151 chars]"
    },
    {
      "source": { "id": "independent", "name": "Independent" },
      "author": "Gustaf Kilander",
      "title": "House Speaker Nancy Pelosi’s husband arrested for DUI in Napa - The Independent",
      "description": "Pelosi avoids mentioning incident in Sunday appearance",
      "url": "https://www.independent.co.uk/news/world/americas/crime/paul-pelosi-nancy-arrested-dui-b2090107.html",
      "urlToImage": "https://static.independent.co.uk/2022/05/29/21/newFile.jpg?quality=75&width=1200&auto=webp",
      "publishedAt": "2022-05-30T05:25:57Z",
      "content": "House Speaker Nancy Pelosis husband has been arrested for DUI after a crash in Napa, California. \r\nPaul Pelosi, 82, was arrested before midnight on Saturday in Napa County and was sent to jail on two… [+2047 chars]"
    }
  ]

  constructor() {
    super();
    console.log("Hello I am an constructor from News component");
    this.state = {
      articles: this.articles,
      loading:false


    }
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsGeek - Top Headlines</h2>
        
        <div className="row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4">
          <Newsitems key={element.url} title={element.title.slice(0,45)} description={element.description.slice(0,88)} imageurl={element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
          
          

        </div>



      </div>
    )
  }
}

export default News
