const TRACKS = [
  ["Chaleya", "Anirudh Ravichander Arijit Singh Shilpa Rao Kumaar"],
  ["Akhiyaan Gulaab", "Mitraz"],
  ["Satranga", "Arijit Singh Shreyas Puranik Siddharth-Garima"],
  ["Dil Dhadakne Do", "Joi Barua Suraj Jagan"],
  ["Ghungroo", "Vishal Shekhar Arijit Singh Shilpa Rao"],
  ["Pehli Nazar Mein", "Atif Aslam Pritam"],
  ["Tum Se Hi", "Pritam Mohit Chauhan"],
  ["Tum Kya Mile", "Pritam Arijit Singh Shreya Ghoshal Amitabh Bhattacharya"],
  ["Ik Junoon (Paint It Red)", "Vishal Dadlani"],
  ["Bekhayali", "Sachet Tandon"],
  ["Sajni", "Arijit Singh Ram Sampath Prashant Pandey"],
  ["Pani Da Rang (Male)", "Ayushmann Khurrana Rochak Kohli"],
  ["Iktara", "Amit Trivedi Kavita Seth Amitabh Bhattacharya"],
  ["Zaalima", "Arijit Singh Harshdeep Kaur"],
  ["Makhna", "Tanishk Bagchi Yasser Desai Asees Kaur"],
  ["Sooraj Ki Baahon Mein", "Dominique Cerejo Clinton Cerejo Loy Mendonsa"],
  ["Raataan Lambiyan", "Tanishk Bagchi Jubin Nautiyal Asees Kaur"],
  ["My Dil Goes Mmmm", "Vishal Shekhar Gayatri Iyer Shaan"],
  ["Nashe Si Chadh Gayi", "Vishal Shekhar Arijit Singh Caralisa Monteiro"],
  ["Kesariya", "Pritam Arijit Singh Amitabh Bhattacharya"],
  ["Kala Chashma", "Amar Arshi Badshah Neha Kakkar Indeep Bakshi Prem Hardeep Kumaar"],
  ["Tu Hi Meri Shab Hai", "Pritam KK"],
  ["Zara Sa", "KK Pritam"],
  ["Pehle Bhi Main", "Vishal Mishra Raj Shekhar"],
  ["Apna Bana Le", "Sachin Jigar Arijit Singh"],
  ["Samjhawan", "Jawad Ahmed Sharib Toshi Arijit Singh Shreya Ghoshal"],
  ["Kabira", "Pritam Tochi Raina Rekha Bhardwaj"],
  ["Tum Mile", "Pritam Neeraj Shridhar"],
  ["Nadiyon Paar (Let the Music Play Again)", "Sachin Jigar Rashmeet Kaur Shamur IP Singh"],
  ["O Maahi", "Pritam Arijit Singh Irshad Kamil"],
  ["Naina Da Kya Kasoor", "Amit Trivedi"],
  ["Jeena Jeena", "Sachin Jigar Atif Aslam Priya Saraiya"],
  ["Kho Gaye Hum Kahan", "Jasleen Royal Prateek Kuhad"],
  ["Tera Yaar Hoon Main", "Arijit Singh"],
  ["Kar Gayi Chull", "Badshah Amaal Mallik Fazilpuria Sukriti Kakar Neha Kakkar"],
  ["Señorita", "Farhan Akhtar Hrithik Roshan Abhay Deol Maria Del Mar Fernandez"],
  ["Tareefan", "QARAN Badshah"],
  ["Khaabon Ke Parinday", "Alyssa Mendonsa Mohit Chauhan"],
  ["Proper Patola", "Badshah Diljit Dosanjh Aastha Gill"],
  ["Maahi Ve", "A R Rahman"],
  ["Mere Bina", "Pritam Nikhil D'Souza"],
  ["Main Rang Sharbaton Ka", "Atif Aslam Chinmayi Sripada Pritam"],
  ["Nazm Nazm", "Arko Puneet Sharma"],
  ["Tu Jaane Na", "Atif Aslam Pritam"],
  ["Lat Lag Gayee", "Benny Dayal Shalmali Kholgade Pritam"],
  ["The Humma Song", "A R Rahman Badshah Tanishk Bagchi Shashaa Tirupati Jubin Nautiyal"],
  ["Jhoome Jo Pathaan", "Vishal Shekhar Arijit Singh Sukriti Kakar Vishal Dadlani Shekhar Ravjiani"],
  ["Ranjha", "Jasleen Royal B Praak"],
  ["Qaafirana", "Arijit Singh Nikhita Gandhi"],
  ["Teri Baaton Mein Aisa Uljha Jiya Title Song", "Raghav Tanishk Bagchi Asees Kaur Nina Mathur"],
  ["Tauba Tauba", "Karan Aujla"],
  ["Phir Aur Kya Chahiye", "Sachin Jigar Arijit Singh Amitabha Bhattacharya"],
  ["Kaise Hua", "Vishal Mishra"],
  ["Tere Bina", "A R Rahman Chinmayi Sripada Murtuza Khan Qadir Khan"],
  ["Kal Ho Naa Ho", "Shankar Ehsaan Loy Sonu Nigam"],
  ["Kyon", "Papon Sunidhi Chauhan Pritam"],
  ["Bin Tere", "Shafqat Amanat Ali Vishal Shekhar Sunidhi Chauhan"],
  ["Ajj Din Chadheya", "Pritam Rahat Fateh Ali Khan"],
  ["Soch Na Sake", "Amaal Mallik Arijit Singh Tulsi Kumar"],
  ["Hawayein", "Pritam Arijit Singh"],
  ["Channa Mereya", "Pritam Arijit Singh"],
  ["Doobey", "OAFF Savera Lothika Kausar Munir"],
  ["Maiyya Mainu", "Sachet Tandon Shellee"],
  ["Tujhe Kitna Chahne Lage", "Arijit Singh"],
  ["What Jhumka?", "Pritam Arijit Singh Jonita Gandhi Ranveer Singh Madan Mohan Amitabh Bhattacharya"],
  ["Dil Ko Karaar Aaya", "Rajat Nagpal Yasser Desai Neha Kakkar Rana Sotal"],
  ["Chaiyya Chaiyya", "Sukhwinder Singh Sapna Awasthi"],
  ["Tum Se", "Varun Jain Raghav Chaitanya Sachin Jigar Indraneel"],
  ["Kalank (Title Track)", "Pritam Arijit Singh"],
  ["Raanjhanaa", "A R Rahman Jaswinder Singh Shiraz Uppal"],
  ["Gehraiyaan Title Track", "OAFF Savera Lothika Ankur Tewari"],
  ["Bolna", "Tanishk Bagchi Arijit Singh Asees Kaur"],
  ["Mere Rashke Qamar", "Nusrat Fateh Ali Khan Rahat Fateh Ali Khan Tanishk Bagchi"],
  ["Ae Dil Hai Mushkil (Title Track)", "Pritam Arijit Singh"],
  ["Tum Ho", "Mohit Chauhan Suzanne D'Mello"],
  ["Tere Naina", "Shankar Ehsaan Loy Shafqat Amanat Ali"],
  ["Jiya Re", "Neeti Mohan"],
  ["Enna Sona", "A R Rahman Arijit Singh"],
  ["Dil Ibaadat", "Pritam KK Sayeed Quadri"],
  ["Main Yahaan Hoon", "Udit Narayan"],
  ["Gerua", "Pritam Arijit Singh Antara Mitra"],
  ["Tera Chehra", "Himesh Reshammiya Arijit Singh"],
  ["Hua Main", "Raghav Chaitanya Manoj Muntashir Pritam"],
  ["Desi Girl", "Shankar Mahadevan Vishal Shekhar Vishal Dadlani Sunidhi Chauhan"],
  ["Besharam Rang", "Vishal Shekhar Shilpa Rao Caralisa Monteiro Vishal Dadlani Shekhar Ravjiani"],
  ["Saathiya", "Sonu Nigam"],
  ["Naina", "Pritam Arijit Singh"],
  ["Dil Diyan Gallan", "Atif Aslam"],
  ["Mera Yaar", "Shankar Ehsaan Loy Javed Bashir"],
  ["Tera Hone Laga Hoon", "Atif Aslam Alisha Chinai Pritam"],
  ["Tum Hi Ho", "Mithoon Arijit Singh"],
  ["Dooriyan", "Pritam Mohit Chauhan"],
  ["Tujh Mein Rab Dikhta Hai", "Roop Kumar Rathod"],
  ["Pal", "Javed Mohsin Arijit Singh Shreya Ghoshal"],
  ["Arjan Vailly", "Manan Bhardwaj Bhupinder Babbal"],
  ["Baby Ko Bass Pasand Hai", "Vishal Shekhar Vishal Dadlani Shalmali Kholgade Isheeta Badshah"],
  ["Maula Mere Maula", "Roop Kumar Rathod"],
  ["Maahi Ve", "Shankar Ehsaan Loy Shankar Mahadevan Sadhana Sargam Sujata Bhattacharya Udit Narayan Sonu Nigam"],
  ["Jag Ghoomeya", "Rahat Fateh Ali Khan"],
  ["Humnava", "Mithoon Papon"]
];

const normalize = (value) => String(value || "")
  .toLowerCase()
  .replace(/&/g, "and")
  .replace(/[^a-z0-9]+/g, " ")
  .trim();

const titleScore = (wanted, actual) => {
  const a = normalize(wanted);
  const b = normalize(actual);
  if (!a || !b) return 0;
  if (a === b) return 100;
  if (b.includes(a) || a.includes(b)) return 78;
  const aw = new Set(a.split(/\s+/));
  const bw = new Set(b.split(/\s+/));
  let overlap = 0;
  for (const word of aw) if (word.length > 1 && bw.has(word)) overlap++;
  return Math.min(70, overlap * 14);
};

const artistScore = (wanted, actual) => {
  const a = normalize(wanted);
  const b = normalize(actual);
  if (!a || !b) return 0;
  const parts = a.split(/\s+/).filter(Boolean);
  const hits = parts.filter(part => part.length > 2 && b.includes(part)).length;
  return Math.min(35, hits * 7);
};

async function findSong(title, artist) {
  const term = encodeURIComponent(`${title} ${artist}`);
  const url = `https://itunes.apple.com/search?term=${term}&entity=song&country=IN&limit=20`;
  const response = await fetch(url);
  if (!response.ok) throw new Error(`iTunes search returned ${response.status}`);
  const data = await response.json();
  const results = (data.results || []).filter(item => item.trackId && item.trackName && item.artistName);
  results.sort((a, b) => {
    const scoreA = titleScore(title, a.trackName) + artistScore(artist, a.artistName) + (a.previewUrl ? 5 : 0);
    const scoreB = titleScore(title, b.trackName) + artistScore(artist, b.artistName) + (b.previewUrl ? 5 : 0);
    return scoreB - scoreA;
  });
  return results[0] || null;
}

export default async function handler(req, res) {
  try {
    const resolved = [];
    const BATCH = 8;
    for (let i = 0; i < TRACKS.length; i += BATCH) {
      const batch = TRACKS.slice(i, i + BATCH);
      const found = await Promise.all(batch.map(([title, artist]) =>
        findSong(title, artist).catch(() => null)
      ));
      for (const item of found) if (item) resolved.push({ id: item.trackId });
    }

    const unique = [];
    const seen = new Set();
    for (const item of resolved) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);
      unique.push(item);
    }

    res.setHeader("Cache-Control", "public, s-maxage=21600, stale-while-revalidate=86400");
    res.status(200).json({
      feed: {
        results: unique,
        title: "Bollywood Essentials",
        url: "https://music.apple.com/in/playlist/bollywood-essentials/pl.c7be009ba325420394d51269b3c4a9fe"
      }
    });
  } catch (err) {
    res.status(502).json({ error: "playlist_fetch_failed", message: String(err) });
  }
}
