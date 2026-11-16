# SF Academic Command Center — အသုံးပြုနည်း

**Developer:** Ko Kyi Phyu Aung  
**Email:** kyiphyuaung@strategyfirst.edu.mm

## Windows မှာဖွင့်ရန်

1. ZIP File ကို Extract လုပ်ပါ။
2. `START_WINDOWS.bat` ကို Double-click နှိပ်ပါ။ Python 3 လိုအပ်ပါတယ်။
3. Browser မှာ `http://127.0.0.1:8768` ကို ဖွင့်ပါ။

Python မရှိသေးရင် `index.html` ကို Browser ထဲမှာ တိုက်ရိုက်ဖွင့်လို့ရပါတယ်။ သို့သော် ပိုမိုတည်ငြိမ်စွာ စမ်းသပ်ရန် Local Server အသုံးပြုပါ။

## Website Features

- **Overview:** KPI Cards၊ Student Status၊ Academic Chart၊ Quick Actions
- **Students:** Student Search၊ Add/Edit/Delete၊ Student Detail
- **Programmes:** Course Details၊ Programme အသစ်ထည့်ခြင်း
- **Attendance:** Present / Late / Absent ကို Click ဖြင့်ပြောင်းခြင်း
- **Assignments:** Assignment ထုတ်ခြင်း၊ Submission Count ပြောင်းခြင်း၊ Open/Closed
- **Timetable:** Class Schedule ထည့်ခြင်းနှင့် ဖယ်ရှားခြင်း
- **Reports:** CSV Export၊ Academic Statistics
- **Settings:** Dark/Light Mode၊ Animation On/Off၊ Sample Data Reset

`Ctrl + K` (Mac တွင် `Cmd + K`) ဖြင့် Workspace Search ကိုဖွင့်နိုင်ပါတယ်။

ပြင်ဆင်ထားသော Sample Data များကို Browser အတွင်း Local Storage တွင် သိမ်းထားပါတယ်။ တကယ့်ကျောင်းသားကိုယ်ရေးအချက်အလက်များ ထည့်သွင်းရန်အတွက် မရည်ရွယ်ထားသော Frontend Project ဖြစ်ပါတယ်။


## Final version: Project launch / stop
- **SF Academic Command Center** = `http://127.0.0.1:8768/` (ဒီ Project အတွက် သီးသန့် port)
- ZIP ကိုအရင် Extract လုပ်ပါ။ Extract လုပ်ထားတဲ့ folder ထဲက `START_WINDOWS.bat` ကိုပဲ Run ပါ။
- Server run နေတဲ့ Command Prompt window ကို ဖွင့်ထားပါ။ `Ctrl+C` နှိပ်ခြင်း၊ အဲဒီ window ကို ပိတ်ခြင်းဖြင့် Server ကိုရပ်နိုင်ပါတယ်။
- အရင် version က `cmd /k` server သီးခြား run နေသေးရင် အဲဒီ window ကိုလည်းပိတ်ရပါမယ်။
- Port busy ဖြစ်ရင် Python error ကိုမြင်ရပါမယ်။ Browser tab ဟောင်းကို Refresh လုပ်ရုံနဲ့ Project server မပြောင်းပါ။
- Browser မှာ project URL (`:8768`) နဲ့ page title ကို စစ်ဆေးပါ။
