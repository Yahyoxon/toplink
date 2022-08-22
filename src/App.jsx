import "./App.css";
import React from "react";
import HomePage from "./Pages/HomePage/HomePage";
import WorkPage from "./Pages/WorkPage/WorkPage";
import FeaturePage from "./Pages/FeaturePage/FeaturePage";
import FaqPage from "./Pages/FaqPage/FaqPage";
import ServicePage from "./Pages/ServicePage/ServicePage";
import PolicyPage from "./Pages/PolicyPage/PolicyPage";
import { Routes, Route } from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import ForgetPage from "./Pages/ForgetPage/ForgetPage";
import CodeForgetPage from "./Pages/CodeForgetPage/CodeForgetPage";
import ComparePage from "./Pages/ComparePage/ComparePage";
import SignUpPages from "./Pages/SignUpPages/SignUpPages";
import AdminProfil from "./Components/AdminProfil/AdminProfil";
import EditPage from "./Pages/EditPage/EditPage";
import SettingsPage from "./Pages/SettingsPage/SettingsPage";
import PremiumPage from "./Pages/PremiumPage/PremiumPage";
import SpecialPage from "./Pages/SpecialPage/SpecialPage";
import AnalyticPage from "./Pages/AnalyticPage/AnalyticPage";
import ReferToFriendPage from "./Pages/ReferToFriendPage/ReferToFriendPage";
import AccountPage from "./Pages/AccountPage/AccountPage";
import AccountShartnomaPage from "./Pages/AccountShartnoma/AccountShartnoma";
import PremiumDomenPage from "./Pages/PremiumDomenPage/PremiumDomenPage";
import BlackProfilPage from "./Pages/BlackProfilPage/BlackProfilPage";
import AnalyticYangilashPage from "./Pages/AnalyticYangilashPage/AnalyticYangilashPage";
import ResultPage from "./Pages/ResultPage/ResultPage";
import { AuthProvider } from "./Context/AuthContext";
import UserProfil from "./Components/UserProfil/UserProfil";
import Layout from "./Layout";
import AccountKarta from "./Components/AccountKarta/AccountKarta";
import { createBrowserHistory } from "history";

function App({ bg }) {
  const token = localStorage.getItem("token");
  const history = createBrowserHistory();

  return (
    <AuthProvider>
      <div className="App">
        {token !== null ? (
          <div className="admin-page">
            <Layout>
              <div className="mains-admin">
                <Routes>
                  <Route path="/:username" element={<AdminProfil />} />
                  <Route path="/:username/edit" element={<EditPage />} />
                  <Route
                    path="/:username/settings"
                    element={<SettingsPage />}
                  />
                  <Route path="/:username/premium" element={<PremiumPage />} />
                  <Route path="/:username/special" element={<SpecialPage />} />
                  <Route
                    path="/:username/analytic"
                    element={<AnalyticPage />}
                  />
                  <Route
                    path="/:username/analyticNew"
                    element={<AnalyticYangilashPage />}
                  />
                  <Route
                    path="/:username/refertofriend"
                    element={<ReferToFriendPage />}
                  />
                  <Route
                    path="/:username/blackprofil"
                    element={<BlackProfilPage />}
                  />
                  <Route path="/:username/account" element={<AccountPage />} />
                  <Route
                    path="/:username/accountShartnoma"
                    element={<AccountShartnomaPage />}
                  />
                  <Route
                    path="/:username/accountkarta"
                    element={<AccountKarta />}
                  />
                  <Route
                    path="/:username/premiumdomen"
                    element={<PremiumDomenPage />}
                  />
                  <Route
                    path="/:username/user-profile"
                    element={<UserProfil />}
                  />
                </Routes>
              </div>
            </Layout>
          </div>
        ) : (
          <Routes history={history} basename="/">
            <Route path="/" element={<HomePage />} basename />
            <Route path="/workpage" element={<WorkPage />} />
            <Route path="/featurepage" element={<FeaturePage />} />
            <Route path="/faqpage" element={<FaqPage faqs={faqArray} />} />
            <Route
              path="/servicepage"
              element={<ServicePage serviceFaqs={serviceArray} />}
            />
            <Route
              path="/policypage"
              element={<PolicyPage policyFaqs={policyArray} />}
            />
            <Route path="/loginpage" element={<LoginPage />} />
            <Route path="/register-page" element={<RegisterPage />} />
            <Route path="/forgetpage" element={<ForgetPage />} />
            <Route path="/codeforgetpage" element={<CodeForgetPage />} />
            <Route path="/signuppage" element={<SignUpPages />} />
            <Route path="/:username" element={<ResultPage />} />
            <Route path="/passwordcompare" element={<ComparePage />} />

            <Route element={<p>404 error page</p>} />
          </Routes>
        )}
      </div>
    </AuthProvider>
  );
}

export default App;

const faqArray = [
  {
    question: "Toplinkni qanday sozlashim mumkin?",
    answer: `To'g'ridan-to'g'ri Toplink profilingizdan! Toplink-ga kiring yoki to'g'ridan-to'g'ri shaxsiy havolangizga
o'ting. Rasmingizni o'zgartirish, yangi havola qo'shish, boshqa tartibda ro'yxatga olish uchun havolalaringizni sudrab
borish yoki ma'lumotingizni tahrirlash uchun "Tahrirlash" tugmasini bosing.`,
  },
  {
    question: "Bu xizmat kim uchun?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!",
  },
  {
    question: "Toplink nima va undan qanday foydalanishim mumkin?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!",
  },
  {
    question: "Qo'llab-quvvatlash xizmatiga qanday murojaat qilishim mumkin?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!",
  },
];

const serviceArray = [
  {
    question: "Foydalanuvchining roziligi va shartlarni qabul qilishi ",
    answer: `Toplink.co ("Biz" yoki "Biz") Toplink.co sayti va turli tegishli xizmatlarni (birgalikda "sayt") taqdim etadi,
agar siz mavjud bo'lgan barcha shartlar, shartlar va bildirishnomalarga rioya qilishingiz sharti bilan sizga,
foydalanuvchiga yoki bu erda ("Xizmat ko'rsatish shartlari") havola qilingan, shuningdek, biz va siz o'rtasidagi boshqa
yozma shartnoma. Bundan tashqari, ushbu saytda ma'lum xizmatlar yoki materiallardan foydalanganda foydalanuvchilar ushbu
Xizmat shartlariga qo'shimcha ravishda shartlar va shartlarni o'z ichiga olishi mumkin bo'lgan bunday xizmatlar yoki
materiallarga nisbatan qo'llaniladigan har qanday joylashtirilgan qoidalarga bo'ysunadilar. Barcha bunday ko'rsatmalar
yoki qoidalar shu bilan ushbu Xizmat shartlariga havola orqali kiritilgan.

Biz sizni ogohlantirmasdan vaqti-vaqti bilan ushbu Xizmat shartlarini o'zgartirish huquqini o'zida saqlab qolamiz. Siz
vaqti-vaqti bilan ushbu sayt va ushbu Xizmat shartlarini ko'rib chiqish va har qanday o'zgartirishlar bilan tanishib
chiqish sizning mas'uliyatingiz ekanligini tan olasiz va rozilik bildirasiz. Bunday o'zgarishlardan so'ng ushbu saytdan
foydalanishda davom etishingiz o'zgartirilgan Xizmat ko'rsatish shartlarini tan olganingizni va o'zgartirilgan Xizmat
shartlariga rioya qilish va ularga rioya qilishga rozilik bildiradi.`,
  },
  {
    question: "Xizmatlar tavsifi",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!",
  },
  {
    question: "Saytdan foydalanish shartlari",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!",
  },
  {
    question: "Uch tomonlama sayt ma'lumotlari",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!",
  },
];

const policyArray = [
  {
    question: "Muntazam ma'lumotlar to'plami ",
    answer: `IP manzillari, brauzer tafsilotlari, vaqt belgilari va havola qilingan sahifalarni o'z ichiga oladi, lekin ular
bilan cheklanmaydi. Ushbu ma'lumotlarning hech biri ushbu saytga tashrif buyuruvchilarni shaxsan aniqlay olmaydi.
Ma'lumotlar muntazam boshqaruv va texnik xizmat ko'rsatish maqsadlarida kuzatiladi.`,
  },
  {
    question: "Xizmatlar tavsifi",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!",
  },
  {
    question: "Saytdan foydalanish",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!",
  },
  {
    question: "Uch tomonlama sayt ma'lumotlari",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, eligendi!",
  },
];
