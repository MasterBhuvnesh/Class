// Example student data stored in a JSON file
const students = [
    {"rollNumber": "1", "batch": "D1-1", "name": "Aarsh Bharat Vaidya", "email": "vaidyaab@rknec.edu", "gender": "Male", "phoneNumber": "7721080610"},
    {"rollNumber": "2", "batch": "D1-2", "name": "Aashwath Ravindra Yadav", "email": "yadavar_7@rknec.edu", "gender": "Male", "phoneNumber": "8446395866"},
    {"rollNumber": "3", "batch": "D1-3", "name": "Abhay Rajesh Mishra", "email": "mishraar_2@rknec.edu", "gender": "Male", "phoneNumber": "7447287566"},
    {"rollNumber": "4", "batch": "D1-4", "name": "Abhinav Anurag", "email": "anuraga_1@rknec.edu", "gender": "Male", "phoneNumber": "7030965060"},
    {"rollNumber": "5", "batch": "D1-5", "name": "Abhishek Yogesh Shrivastav", "email": "shrivastavay@rknec.edu", "gender": "Male", "phoneNumber": "7559320324"},
    {"rollNumber": "6", "batch": "D1-6", "name": "Aditi Birendra Gupta", "email": "guptaab_1@rknec.edu", "gender": "Female", "phoneNumber": "7020868775"},
    {"rollNumber": "7", "batch": "D1-7", "name": "Aditya Anoop Modi", "email": "modiaa@rknec.edu", "gender": "Male", "phoneNumber": "9156084316"},
    {"rollNumber": "8", "batch": "D1-8", "name": "Aditya Tanaji Bawankule", "email": "bawankuleat@rknec.edu", "gender": "Male", "phoneNumber": "6353328454"},
    {"rollNumber": "9", "batch": "D1-9", "name": "Amit Ruplal Saw", "email": "sawar@rknec.edu", "gender": "Male", "phoneNumber": "9324494934"},
    {"rollNumber": "10", "batch": "D1-10", "name": "Ankit Narendra Kolhe", "email": "kolhean@rknec.edu", "gender": "Male", "phoneNumber": "7666846804"},
    {"rollNumber": "11", "batch": "D1-11", "name": "Ankit Satish Lanjewar", "email": "lanjewaras@rknec.edu", "gender": "Male", "phoneNumber": "7722050194"},
    {"rollNumber": "12", "batch": "D1-12", "name": "Anklesh Naresh Sontakkey", "email": "sontakkeyan@rknec.edu", "gender": "Male", "phoneNumber": "9511282883"},
    {"rollNumber": "13", "batch": "D1-13", "name": "Annalhq Haroon Shaikh", "email": "shaikhah@rknec.edu", "gender": "Male", "phoneNumber": "9373531016"},
    {"rollNumber": "14", "batch": "D1-14", "name": "Anshul Narendra Parate", "email": "paratean@rknec.edu", "gender": "Male", "phoneNumber": "8208170566"},
    {"rollNumber": "15", "batch": "D1-15", "name": "Anshum Rakesh Pal", "email": "palar_2@rknec.edu", "gender": "Male", "phoneNumber": "9370930133"},
    {"rollNumber": "16", "batch": "D1-16", "name": "Anuj Agrawal", "email": "agrawala_5@rknec.edu", "gender": "Male", "phoneNumber": "7223061410"},
    {"rollNumber": "17", "batch": "D1-17", "name": "Anuj Kamalkishor Parwal", "email": "parwalak@rknec.edu", "gender": "Male", "phoneNumber": "9579944504"},
    {"rollNumber": "18", "batch": "D1-18", "name": "Anuja Madhukar Gutte", "email": "gutteam@rknec.edu", "gender": "Female", "phoneNumber": "9146073807"},
    {"rollNumber": "19", "batch": "D1-19", "name": "Anurag Pankaj Pathak", "email": "pathakap@rknec.edu", "gender": "Male", "phoneNumber": "7471125132"},
    {"rollNumber": "20", "batch": "D1-20", "name": "Aryan Jagdish Patel", "email": "patelaj_1@rknec.edu", "gender": "Male", "phoneNumber": "9518715241"},
    {"rollNumber": "21", "batch": "D1-21", "name": "Aryan Prashant Akhare", "email": "akhareap@rknec.edu", "gender": "Male", "phoneNumber": "7385947610"},
    {"rollNumber": "22", "batch": "D2-22", "name": "Aryan Rajesh Bokde", "email": "bokdear@rknec.edu", "gender": "Male", "phoneNumber": "7447563686"},
    {"rollNumber": "23", "batch": "D2-23", "name": "Aryan Rajesh Nakil", "email": "nakilar@rknec.edu", "gender": "Male", "phoneNumber": "9422534903"},
    {"rollNumber": "24", "batch": "D2-24", "name": "Aryan Shripad Joshi", "email": "joshias_3@rknec.edu", "gender": "Male", "phoneNumber": "8999958253"},
    {"rollNumber": "25", "batch": "D2-25", "name": "Ashish Chakradhar Kamble", "email": "kambleac@rknec.edu", "gender": "Male", "phoneNumber": "8668617729"},
    {"rollNumber": "26", "batch": "D2-26", "name": "Asmi Mahendra Bhawsar", "email": "bhawsaram@rknec.edu", "gender": "Female", "phoneNumber": "9325248418"},
    {"rollNumber": "27", "batch": "D2-27", "name": "Atharva Prateek Kulkarni", "email": "kulkarniap_1@rknec.edu", "gender": "Male", "phoneNumber": "9979763122"},
    {"rollNumber": "28", "batch": "D2-28", "name": "Bhuvnesh Pradeep Verma", "email": "vermabp_1@rknec.edu", "gender": "Male", "phoneNumber": "8390545534"},
    {"rollNumber": "29", "batch": "D2-29", "name": "Chaitali Sunil Kumar Nadekar", "email": "nadekarcs@rknec.edu", "Female": "Female", "phoneNumber": "7067384447"},
    {"rollNumber": "30", "batch": "D2-30", "name": "Chaitanya Suresh Zunzurkar", "email": "zunzurkarcs@rknec.edu", "gender": "Male", "phoneNumber": "7219837057"},
    {"rollNumber": "31", "batch": "D2-31", "name": "Cherry Pradeep Agarwal", "email": "agarwalcp@rknec.edu", "Female": "Female", "phoneNumber": "7888090887"},
    {"rollNumber": "32", "batch": "D2-32", "name": "Chhavi Sunil Pancholi", "email": "pancholics@rknec.edu", "Female": "Female", "phoneNumber": "9604650393"},
    {"rollNumber": "33", "batch": "D2-33", "name": "Chitresh Deshmukh", "email": "deshmukhc@rknec.edu", "gender": "Male", "phoneNumber": "6261924070"},
    {"rollNumber": "34", "batch": "D2-34", "name": "Daksh Neeraj Badhoniya", "email": "badhoniyadn@rknec.edu", "gender": "Male", "phoneNumber": "7038901662"},
    {"rollNumber": "35", "batch": "D2-35", "name": "Deepanshu Rajesh Nanure", "email": "nanuredr@rknec.edu", "gender": "Male", "phoneNumber": "8767357622"},
    {"rollNumber": "36", "batch": "D2-36", "name": "Dhaneshwari Kuldeep Bhatia", "email": "bhatiadk@rknec.edu", "Female": "Female", "phoneNumber": "9307510426"},
    {"rollNumber": "37", "batch": "D2-37", "name": "Dhruv Dinesh Krishnani", "email": "krishnanidd@rknec.edu", "gender": "Male", "phoneNumber": "7972752252"},
    {"rollNumber": "38", "batch": "D2-38", "name": "Dhruv Subhash Yadav", "email": "yadavds_1@rknec.edu", "gender": "Male", "phoneNumber": "8928336720"},
    {"rollNumber": "39", "batch": "D2-39", "name": "Disha Pramodsingh Chauhan", "email": "chauhandp@rknec.edu", "Female": "Female", "phoneNumber": "8482994868"},
    {"rollNumber": "40", "batch": "D2-40", "name": "Divya Shrikant Ruthiya", "email": "ruthiyads@rknec.edu", "Female": "Female", "phoneNumber": "8237015924"},
    {"rollNumber": "41", "batch": "D2-41", "name": "Durgesh Rajesh Shukla", "email": "shukladr_1@rknec.edu", "gender": "Male", "phoneNumber": "9022788792"},
    {"rollNumber": "42", "batch": "D2-42", "name": "Ekansh Manoj Bhaiswar", "email": "bhaiswarem@rknec.edu", "gender": "Male", "phoneNumber": "9322934876"},
    {"rollNumber": "43", "batch": "D3-43", "name": "Fardeen Kha Naeem Kha Pathan", "email": "pathan@rknec.edu", "gender": "Male", "phoneNumber": "8766929742"},
    {"rollNumber": "44", "batch": "D3-44", "name": "Giriraj Shyamprakash Pande", "email": "pandegs_1@rknec.edu", "gender": "Male", "phoneNumber": "9325058130"},
    {"rollNumber": "45", "batch": "D3-45", "name": "Gunjan Ajay Pandya", "email": "pandyaga@rknec.edu", "Female": "Female", "phoneNumber": "9850356410"},
    {"rollNumber": "46", "batch": "D3-46", "name": "Harsh Kamalprasad Barewar", "email": "barewarhk@rknec.edu", "gender": "Male", "phoneNumber": "8010213854"},
    {"rollNumber": "47", "batch": "D3-47", "name": "Harshad Yashwantrao Ikhar", "email": "ikharhy@rknec.edu", "gender": "Male", "phoneNumber": "7620430254"},
    {"rollNumber": "48", "batch": "D3-48", "name": "Harshvardhan Gopal Kedia", "email": "kediahg@rknec.edu", "gender": "Male", "phoneNumber": "9850988447"},
    {"rollNumber": "49", "batch": "D3-49", "name": "Himanshu Dinesh Joshi", "email": "joshihd@rknec.edu", "gender": "Male", "phoneNumber": "9370853626"},
    {"rollNumber": "50", "batch": "D3-50", "name": "Himanshu Rajesh Kanjwani", "email": "kanjwanihr@rknec.edu", "gender": "Male", "phoneNumber": "9579964085"},
    {"rollNumber": "51", "batch": "D3-51", "name": "Ishita Rajesh Shegaonkar", "email": "shegaonkarir@rknec.edu", "Female": "Female", "phoneNumber": "9922143869"},
    {"rollNumber": "52", "batch": "D3-52", "name": "Janhavi Rajesh Naidu", "email": "naidujr@rknec.edu", "Female": "Female", "phoneNumber": "7887460070"},
    
        {"rollNumber": "52", "batch": "D3-52", "name": "Janhavi Rajesh Naidu", "email": "naidujr@rknec.edu", "gender": "Female", "phoneNumber": "7887460070"},
        {"rollNumber": "53", "batch": "D3-53", "name": "Janhvi Ravikant Thakare", "email": "thakarejr@rknec.edu", "gender": "Female", "phoneNumber": "9356862878"},
        {"rollNumber": "54", "batch": "D3-54", "name": "Juilee Rajesh Lambe", "email": "lambejr@rknec.edu", "gender": "Female", "phoneNumber": "9022141665"},
        {"rollNumber": "55", "batch": "D3-55", "name": "Kartikey Sandeep Kalbande", "email": "kalbandeks@rknec.edu", "gender": "Male", "phoneNumber": "9175122103"},
        {"rollNumber": "56", "batch": "D3-56", "name": "Krish Umesh Ramchandani", "email": "ramchandaniku@rknec.edu", "gender": "Male", "phoneNumber": "9175586160"},
        {"rollNumber": "57", "batch": "D3-57", "name": "Mohit Jitendra Mohatkar", "email": "mohatkarmj@rknec.edu", "gender": "Male", "phoneNumber": "7058849591"},
        {"rollNumber": "58", "batch": "D3-58", "name": "Nishtha Sunil Mulchandani", "email": "mulchandanins@rknec.edu", "gender": "Female", "phoneNumber": "9028308439"},
        {"rollNumber": "59", "batch": "D3-59", "name": "Poush Mangesh Makade", "email": "makadepm@rknec.edu", "gender": "Male", "phoneNumber": "8668424645"},
        {"rollNumber": "60", "batch": "D3-60", "name": "Rudra Narendra Bambal", "email": "bambalrn@rknec.edu", "gender": "Male", "phoneNumber": "9343479570"},
        {"rollNumber": "61", "batch": "D3-61", "name": "Sumedh Abhijit Pittule", "email": "pittulesa@rknec.edu", "gender": "Male", "phoneNumber": "9822841405"},
        {"rollNumber": "62", "batch": "D3-62", "name": "Vedika Naresh Bokade", "email": "bokadevn@rknec.edu", "gender": "Female", "phoneNumber": "8329241682"},
        {"rollNumber": "63", "batch": "D3-63", "name": "Viplav Suyog Bhure", "email": "bhurevs@rknec.edu", "gender": "Male", "phoneNumber": "7447895688"},
        {"rollNumber": "64", "batch": "D3-64", "name": "Viraj Mahesh Yawale", "email": "yawalevm@rknec.edu", "gender": "Male", "phoneNumber": "9699045200"}
    
     // Add more student data as needed
];

function search() {
    const searchType = document.getElementById('searchType').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    let resultHtml = '';

    students.forEach(student => {
        const searchData = student[searchType].toLowerCase();
        if (searchData.includes(searchInput)) {
            resultHtml += `<p><strong>${student.name}</strong><br><b>Roll Number:</b> ${student.rollNumber}<br><b>Email:</b> ${student.email}<br><b>Gender:</b> ${student.gender}<br><b>Phone Number: </b>${student.phoneNumber}<br><b>Batch:</b> ${student.batch}</p>`;
        }
    });

    document.getElementById('result').innerHTML = resultHtml || 'No matching results.';
}
