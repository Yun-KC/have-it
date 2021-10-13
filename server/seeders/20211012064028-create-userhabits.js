"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "userhabits",
      [
        {
          userhabits_id: 1,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1249",
          habits_id: 1,
          goal: "일주일에 책 한 권",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
        {
          userhabits_id: 2,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1250",
          habits_id: 1,
          goal: "일주일에 책 두 권",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
        {
          userhabits_id: 3,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1251",
          habits_id: 1,
          goal: "일주일에 책 세 권",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
        {
          userhabits_id: 4,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1252",
          habits_id: 2,
          goal: "하루에 한번 감사 일기 작성",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
        {
          userhabits_id: 5,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1249",
          habits_id: 2,
          goal: "고마운 사람에게 전화하기",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
        {
          userhabits_id: 6,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1250",
          habits_id: 2,
          goal: "감사한일 메모하기",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
        {
          userhabits_id: 7,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1251",
          habits_id: 3,
          goal: "매일 운동장 다섯 바퀴",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
        {
          userhabits_id: 8,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1252",
          habits_id: 3,
          goal: "일주일에 세 번 헬스장가기",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
        {
          userhabits_id: 9,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1249",
          habits_id: 3,
          goal: "강아지랑 산책가기",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
        {
          userhabits_id: 10,
          users_id: "e8023291-7809-46d0-9afd-f29d561d1250",
          habits_id: 3,
          goal: "적게먹고 운동 열심히!",
          habit_day: 63,
          start_date: "2021-10-12 10:10:10",
          end_date: "2022-10-12 10:10:10",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("userhabits", null, {});
  },
};
