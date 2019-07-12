const initState = {
    loading: false,
    menuType: 'menu',
    items: [
        {
            name: 'Appetizers',
        },
        {
            name: 'Main Dish',
        },
        {
            name: 'Fried Rice'
        },
        {
            name: 'Noodles and Pho',
        },
        {
            name: 'Rolls'
        },
        {
            name: 'Extra',
        },
        {
            name: 'Drinks',
        },
    ]
}

export default function MenuReducers(state = initState, action) {
    switch (action.type) {
        case 'GET_APPETIZERS':
        case 'GET_MENU':
        case 'GET_MAINDISH':
        case 'GET_FRIEDRICE':
        case 'GET_DRINKS':
        case 'GET_ROLLS':
        case 'GET_EXTRA':
        case 'GET_NOODLESANDPHO':
            return {
                ...state,
                loading: true
            }

        case 'GET_MENU_DONE':
            return initState

        case 'GET_APPETIZERS_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Appetizers',
                items: [
                    {
                        name: 'Mango salad',
                        img: 'https://previews.dropbox.com/p/thumb/AAcrGoC46fKvtJamxnTMWn5kshJp5TMI2jY1jal8p1dE-Zckb5yNHbDI_g3n7-1FnONA3ighV5u8XDkZAfpEqtlHugjMjx2ZCSSiyEaW0DxB0x4iOuC4vzcUxIQ_KPwAgFtOHFJOvMgwuyTb9lQ-sfLk5MuHKqYCk0u5dC-YNAjv14bghAHug6xF6y8mKH_UaF5uygg5_DsPAip1AQ7ARK8oHS8DeScaZQFUZrCQkb4foRlpCRpWTjQ1EJpbP1t_0t9SHhRumGkB5YnXa6BV9CMiI5DIRvlKy5goly4fdCboESwWPYbgCl6ywLE-PnstMeO6PXc-IzTPQWKsxv4RmR_e/p.jpeg?fv_content=true&size_mode=5',
                        price: '5 € - 8 €'
                    },
                    {
                        name: 'Papaya salad',
                        img: 'https://previews.dropbox.com/p/thumb/AAfTfSXMEm_JO1-qq0iLRp15vLIuSt0NaJK9IU5GUDfHtXFdrdh9DgV0SMtnjBJFstgaYVZz6j1CFjd9_bqT85u00gh0wQJTcmxHMQjqXKa3PIeJCSnc4zUmjaKSlWpvq390jbWuE72m_8BAteQo9M84YFeBvmZqSjJbkSge3SAcJSRGCXCXma1mz4a1iag2jZBse6uejgTcA4e6ekccW1M6zy_hZejAzna-H3spESxlDbQ9RxfmUdgd32FWpCtCiK8tsbv4fuyRqqjoHQvx1_OIQEBImUHpPaizdRWMeYref2Vu-Epd7B8dztpFN4f0R0EQzbbXYwA6b-GnBNLn0-OG/p.jpeg?fv_content=true&size_mode=5',
                        price: '5 € - 8 €'
                    },
                    {
                        name: 'Sweet and sour cucumber',
                        img: 'https://previews.dropbox.com/p/thumb/AAf6WpM-TXor4SQKz22TzldVsAT2R3zsx5F6hDB_gJgsCzscpY7BdOeDQzherG1-v6qfPHbabjsBrN3k2KZBT2eiblJRF8rNHVirrqOhREHfPBu1Am2ub5BMnUyryhUQfewmnDF3lIAg7Z8CH_3-FZ-JAIOvXmu5QidR2njQYyR9Vexsl6xFQaC0HzuD3y0epTUwr6PEMyvGPd9itaPO1whToQybYUpLDC1tIwUFi-ISqr6gjCI2nfmUKKTUkJzJMcl0Qq7dhGydp1mQp8t5iBGXcTsQb-E9lvtXXbjBthrb7ahqAfTFayDR03KDjT9ByNFqxNjm83S--qGiXJHTUUGo/p.jpeg?fv_content=true&size_mode=5',
                        price: '5 € - 8 €'
                    },
                    {
                        name: 'Russian salad',
                        img: 'https://previews.dropbox.com/p/thumb/AAef7Rl0aW5uLgezjfGZZbJfRdQnizxhlHdvtLDTwiXIf5sdRy_6f-or8FZMRZxh9AttfDrrVhyUFEemhrMyVcITn2AJiyE5-xKPGSEoiZt2VA2kTsnj6C1UntzeiC4iObNtpdsdgLRKQWGvb6wr2-ZtwrYep_6VHoUiRjb6jGSi9h3iQ-tU5TxTgtJsoRrxL4zV1akKmNKJmf6FR75Ji_nJOnKbrE5xn9NI9oLVtV8wUb4YOz9IP0bXSWSjd6tspNh0rYaBE_m8yUcsqV3pEjyMB0u_7__i2VKEit-ZcpzmMFu7sae5O7oC2ViHbry93Yr-wZmw2hrD1FMiCVLkcZTJ/p.jpeg?fv_content=true&size_mode=5',
                        price: '5 € - 8 €'
                    },
                    {
                        name: 'Beef salad',
                        img: 'https://previews.dropbox.com/p/thumb/AAclIBJz6xatNXZO7RwVdyP-3tCIxV9NKA-YWJMyQ883RXP2gvvCCYoj4rZq-z1DB_zLmfiD3p-TqxithLTtZLk4iQoH4WHPDbbGD212GrbEyqtmv-aaRLspKoLNQT3JrpbELp3dxbs9BEA5MAcrM58kYJ63pfIT1bJ-8Qr1HkYbrehOB00UhFOMLGTptnk5eZKT5Jw43-Bs71OPeEsZbgsmGs8c38saMgqH1-M7h-EyrrWJOYsigMwtsVptIaRG0T00La14AZy9jgVMbsoe0u5f4PtWV_sboUZWmvkTwSvYGgHTU015tVm5l200m9YdjZpo4eDKQ57MNjQvA5QS-vU0/p.jpeg?fv_content=true&size_mode=5',
                        price: '6 € - 10 €'
                    },
                    {
                        name: 'Chicken salad',
                        img: 'https://previews.dropbox.com/p/thumb/AAemTJQU241u4XB4hqIumBhriDsQw0wucxflkMSIRElnG1RZ2grbjKhiQQ0mGQrCVOF1eVr8-H1gxe0RSSIeR0ZKnBYKPZYSiTvbG9TCSDbgRjfELEPt3RXuIYf1Pycn6DDaDsoXJJm9mjeRBFd_szN6J97x7ihpKe1t07YYNdZyW8Bs2HLbHXxUlhfyWbuXAWUE4SDoIpfXsk8toot4Mrs5w0M33lsNe1Ms8toDb2eFDTIOEQkRe46sdYrzzLWNSxxawMnHr4A7iEdw5DMGkNRj7zcyY7f4k-mfWTC4eI2fyizcvy2nHXg8p67DLM7E12xMgP2b7ltLyLc8Zx9mMoHC/p.jpeg?fv_content=true&size_mode=5',
                        price: '6 € - 10 €'
                    },
                    {
                        name: 'Chicken corn soup',
                        img: 'https://previews.dropbox.com/p/thumb/AAfadZVSUK4QHZb8ZNVBQsChEMAEPIa1RKZP8_jHnVaca8nGltcIBgOf1NGhmCFrZ6F6nUiDiQKQNDChlkAxs9OhqGUx9RSYZxvw1hq_y6x6ZJ06rd7McXIt3OVPzqo_NCjFQ4sjel4tj9kFmFzUBwOOqsT0wPhwPzFDzO2_BjPi8bvX5exyRe0d0np_MwPi-Ykp0M9yC29G6Z_Y9JPYfE005ae_oaySC6sDJLU0KjuCC5w5sMV5bCkDL3oYJjegVyQL2zlDEJmnNZADg2s5VtjKkeeWbiuBGY6lxYihuco_CfKzQbotQe3fOvBCX3fyftfEcKHDNC53oti0Qqjjg152/p.jpeg?fv_content=true&size_mode=5',
                        price: '6 €'
                    },
                    {
                        name: 'Shrimp soup',
                        img: 'https://previews.dropbox.com/p/thumb/AAc78DKwGB1RMI03OhbwZjYZkPOyoLk1fbl9yZ4AvryDmtF15kmV6GV2G3Cqv-hpPQTr-MiWuKS-Gi9mEeXblsN1tjOxB6CcmlE7PM_L5FrswkFMkZc0rEXuPVoO5iIWkomRfKYqd4dpUqIdBSy_B77BU1ufP8tqf3fpO7X_OTA-bINf-6wAKDu8IwFarLE4gyOoE1dKw_UIEDfFWFguyt5PtoevBOeJWg9uJtMcWyeWzXuwz3xqEH2hhM4P6K5GjPVmCJ5RdN7EZkL8EXaaTFGrtIiJYvKXSA2n-orOyqwsxWQ2P8FnZSKlBm9vxmBeLyDtOAR7fYgfw_h7q07qxHWX/p.jpeg?fv_content=true&size_mode=5',
                        price: '6 €'
                    },
                    {
                        name: 'Tom yum',
                        img: 'https://previews.dropbox.com/p/thumb/AAdzc7FqQ0669iHMoranLfXEe7yunD1OtOW2m7WiTLINsECk3-FV-DYjRqWfQEk6AsOlOIhgtz0UObvpa4JH_HfUKlhLsHaKIHKbjndm5PEBbrPGos5FB1-ZO4p14-R_v-z1QqlTzGMRzcpb0qOHRdytV3yIxpv9lrCMJkK8BSf-_7_NUFaxCDmq_Hdhw1yxKgS3T6MdRSsWTR46jeX2pOKvuPJDKeSlYNen8Qs8SuX9Hcd5yJh0EA3xkqSr86a5vyBDIoSQYlHuHySRQY5kCfno46zwPublK6Lxl2Ds0AoIyGObmhH6poLBXuyfKN_Y0LxL4v-crxkrT4HBovpwB9kf/p.jpeg?fv_content=true&size_mode=5',
                        price: '8 €'
                    }
                ]
            }

        case 'GET_MAINDISH_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Main Dish',
                items: [
                    {
                        name: 'Sweet and sour chicken',
                        img: 'https://previews.dropbox.com/p/thumb/AAc0YSyDPae4sGVf0xVM_soOHux6mbf7jAx6ZU-uO_BzL6IhIgUFVFaX24476NvbamePyDzlH0DLUY4H_AP-RkGZ5LOXzztIZFx1Deq70djbQRCFdeRZvj9Zkjvg0NAiWWbiiQGlf0-z5Hi90OmgzCQw87c1NaPcGmwU1jJbstA4Ywt0Lh6yebq8Tk14_aSTaLiPXq7ZJg41dE7WniyKDeUsnStM2LiD_NM-GdQBfaEAeXo9B7SmRe3qgYDYW6oXvsUgg4huZWYmqf4URpzyKW8Sas6rW6rfhihU9Qi00Y4xoNCedyAC17Fkp98efWKKw7LBC5t1Bga6bZBs8ry8U_tX/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    },
                    {
                        name: 'Mango chicken',
                        img: 'https://previews.dropbox.com/p/thumb/AAd1YIOZApxRoY7XKuGJ8Bi0o73dKO9E0vwpd4fIW4s75Sk3c38zQo401LloQpNeTYo3yZ2fuEMBQXXXL-NqymDYkmn2AavuKTxTyK3awnPZwS243AkpTNLb4vuoVIJh46e3mt5NwQSVgUUhknvJdx8ScDkc7NmYe2cKd3n0fZKGUUoiBBJdue-HTl8BIa0xVCr1q_OFqb88vbGBGIxelYQeUtVqvJ88CcpC5cNjlpypMhvH6_wKcqk_VWKWhR6diWuCC02mMyZlUDNPXVP2Yc7KpziS7OvfGCDgIpCapd9We7LQGQGhspq33KH9IRwwpyCqV3P4hJlqfO6lm5WmzohI/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    },
                    {
                        name: 'Spicy chicken',
                        img: 'https://previews.dropbox.com/p/thumb/AAdvCKPePU3Ls1Nani-8cYGbT--JeSJnNYrpafDrDSk0rA5Y89EM9Usp-_W0hTI6Ex3TV3trzFpvMwN2-f-GimsIWWMvX4TCabrArn3TrQvNlIcNm1_pfkpf3Z-O79t58zHjdK6hAzkpgENcbazs40kWBMU2sJkMg01q55Q6GTyX9_Xs9BIkPRBOk9wrVZT8qXU0JGqgMmpGEeSi1gmYRtsTyUaGNnlGyG-tFbsGj6__3N16KZhkgZC6483n4Xft4m6KloFdu0Y6SblVrfZ3oAPHbajYDLBjx5o63T_wFAEh0S5FfVSKqXLAh5sKZQ5FRGTJFiLgBsWrv_tF5szLDhHp/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    },
                    {
                        name: 'Lemon chicken',
                        img: 'https://previews.dropbox.com/p/thumb/AAfn-emBp7eWPU126xiaxqLfQxWD9caEePOxvKlOoGffGUo-ffS5NaArtwhfNQdxNWpmQyeP_FzxyuVgLCqmuCFebzSLqF6rs3ElKROJxUEmWi97vUbUnvB5zcWd2qfRvbX1yQw64RRbouejfDJgO6-KjMtjtYb6PMU1NPva1ohY1FfKDc56MGxhWz0moqYsPf-SiHrlb2Ac70f4f_dWAYEm9_Hs48xv2qhsn58GYR7vnJTYUS8u0IwygIdNii2D_B8wfLkirtkStaSF0IdxDRCvDf5mm6j7VanKy8E5_iPe2AD4X_U0CxeCbEsOrABmbFEXic0DqaIMbuDh04th0kTV/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    },
                    {
                        name: 'Curry chicken',
                        img: 'https://previews.dropbox.com/p/thumb/AAcF1I_o7w5ads4XXsdbwwyhcMLYQA6kFCR_t0929_rp7-MRAWQZHbE6V7gtyEKZRUC2dE7_2PdukfOI2kjMVzcY7oAk_619lBxwZK8k8bhY67cb0rwxMJGuf0Ne88LSWjvbCPkvfJ3rmXID1y1JC4jBRVRfOwlWfLGGOsPVSv0yrz7waPSgp9GofqU129KG6bF3zPO9M8mks42ZQtzuMQuJfuOvQ_e8v80genWq-Kajx9mxwnFSaigF_nvnPQiALTcUvFIdOuZJv7T66zsZz3wdTM2WFy3ymPbxNZl4ofjNBQKwGrl-8VuQmz9ZKkHj9HmwMeX-WlhsWqLPDAzPFbCI/p.jpeg?fv_content=true&size_mode=5',
                        price: '13 €'
                    },
                    {
                        name: 'Kungpo chicken',
                        img: 'https://previews.dropbox.com/p/thumb/AAfSo32aIfuVOrTIgwBWxhMX3yjAByxkqJgxYcNnbTii92sx4ASk6KWBNyT8VGbEDnJ5nMuZbAToghQwNFvczZopDRzXVbo-4OoNk0qJ5NOLFNV8_cWPgZlYsuu5fAzD99tZ5nuWU0yHEQRd2j6qMHqPQBg5e0wWyOvhT2ocZ5VoblKYcs0JeoeDxbBZEfBzx45JJEGjYgAdtRkOmLXJ21GmGcoaCyQvwOXzCTdVy5w99auMWxhlJZ71soS8VduKb9ZnCz1YA2sMJHEPIm8lVylpooe9ksu9V_t_r2KO8sbYDSpa1gaf8JO4mhPAhkNmM0wvQWrisaC7KDR5ObhW4MIG/p.jpeg?fv_content=true&size_mode=5',
                        price: '13 €'
                    },
                    {
                        name: 'Pork BBQ Hongkong',
                        img: 'https://previews.dropbox.com/p/thumb/AAfXZ1dh1wS50ykm9WIqEpq1PdF7Y1sf1ZZfX6dYOk8H5NeaNibT_hPW7d0zdValJVa69jVGH4TIfje8F8irTJTZvJpp2dIGxlWbtnQHWpyMwjEhR-VS0ihsAJY7DECBTKXXD0QCpO-EF8jrwwHBwqZgeHd1uw5xRNa_hqWE0XJTIb0IaLuuRxC0czdKc-xqjPdqsKWaN68btkgl1ANlOouLlnD4ul_VApNb9fbfbzHbcO9nkAaXuxUfbWkr251JZ7N5FC6EQXH1olhxdsT7wFMw6NAGrCpxPi5uyggCis6NLzJIWzUzTF9feWcpQJEwo8M8s5zDKhUaM_jCroddBFLA/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    },
                    {
                        name: 'Vietnamese roasted pork',
                        img: 'https://previews.dropbox.com/p/thumb/AAejgmXLrY8gCLWk2y_vWcVPL0XB4j-Y3YDuh9tWTsaejVaq5nY0KcN43weMT2sj6oizGtdQ1x44NwzqzYy6zMlYHpZCbPfWPBpH3C4YRf5hwdX5HG0jjCLD88KO3YOuo4OxWdRhpPdSQ6r9bMlYgpkcgKU1YI7JmbMo2DMtr1WdIUGcSzG_5z47EAmvaHAGRRqUomzSgbAlIdwgHLh0XVNXazobGDoniAGgAx5IngsoJp-1_oIyu7F0ombApewb9GNVrngdBF6eUnuTbQTbS1x1ecgZe6WVgL5El3c2RjDXdvHmQU1_X2x4HTkVLtZLDiec4Mpj9C-cg8omrkHFgwZc/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    },
                    {
                        name: 'Oyste sauce beef',
                        img: 'https://previews.dropbox.com/p/thumb/AAeWzpXePl50a1KcfQhQoHWsdpxmS2AfI6LGo0Mxyl7yeBOaodBtNrsA6BmrjAE8IA6qHAgkHFQkmz46L2LVh5nn1G6rQ0E1ZcGj9PdmRD2t-zZnV6XlHPKnBDbOWldCedEwsjyB8d2_0c9i3NFn2D-cFJ9o1cbqRDoVOmqZSY6RDfUTDO8ybz557OSUtMSjctEd1ME5TSvtLCZKo5r9pO8r12UeDi_NXPVoWjvbKh_Yk8-Ws0FfnNuWffOQolOpxsQ7UArmcBA9YkxIA5L47N1EhqGU64m1XYBhnePMEt4kEXljp2JrrJ6h9ZQ8rPnkf5SbDFivXVXaACTR9xbzt0Ut/p.jpeg?fv_content=true&size_mode=5',
                        price: '15 €'
                    },
                    {
                        name: 'Shaking beef',
                        img: 'https://previews.dropbox.com/p/thumb/AAemhRQeSDbmQgwNdTwqad2Py4kDyn51pvl2LyGtNUCxh1Gr73dPh8XA2pV5PKh9N42vEJKmy7ehXCDqhDjIueFpMMxOoREoVQpf9Zl-NZs9UXrPWnlib5F1zILz8uRRFTv0h0kAWVvFqRAschVoUZfY2flnJOte1gc6I-XXiYn4650edAFeHwRxgGcrX-8C__8uyf3bN4baT4Ts_-_m4aR7P5f22U5DOEVyswS1vZSzcUZwatA7ilr41SruNoqBi6DozMQOQ8r5zj0r-GSc7vA_3ZfMnpj81qo3bqgvyocnFayNSUW_pajukrKiPm814Ghi4h0HJ_uljw-k9esXRs8g/p.jpeg?fv_content=true&size_mode=5',
                        price: '18 €'
                    },
                    {
                        name: 'Beef steak (300g)',
                        img: 'https://previews.dropbox.com/p/thumb/AAdGU8DI6Gwb1gLKT1tJDJqGblj32QZ9hNoh-u7k38rVwuAbQopKoWJjrJCFSbc2pjzXozbnvVxhHdSksvEYfPpVBdUIFFwG83l17GvNrSuPwnhphpngisOYv6QFDskOj7g3nxO288803GQBFBjBvqRZM-aCNDcapBYOPiv4WFEdK8iyH-OTnNeNY-YpjjKxM34E86wlLR3CJqbpJoFS8tu3QH7im-v3fCTENVIjqHqm3al2Zg216e4AQEInEezfkv292QEjaClm_EQ3Or1NffRK4Ku5xpuz4eJaJvH8EGGeSDJV_HpU_H_8nK2QCtINAxlHpZ8vU05ZYK0tPDijos_8/p.jpeg?fv_content=true&size_mode=5',
                        price: '25 €'
                    },
                    {
                        name: '1/4 duck with pancake',
                        img: 'https://previews.dropbox.com/p/thumb/AAfAPkA6uvy6DUDP0SjeuRW-K_CnsvRJO1M-g_jgLU0QMCmPE-JlsPXOUUd5rS_GaWtA-mxiV_V-fiJSp0JLov9p5IraxRqWUmk_-LjE6F3g4tqU6jsrlJuZyeYCksl6AYi3PzsIcQJPZ15buA_qgxftY750XVHEW2bMYpVBIkvSkJO5vtNNx99KWg71lEwpvX042fezHcuv0mDqWue8Oumcm8jPvSNnqbLTdoBcLrqaTdwjZrlWoNTK_TMYpbwWhpU793BTKT2Unqwhh_5l0LCZOhfK_L5xCFMtUkRj_1sgC7l0YVwbAzXsCuBB-CoaQHzp3GRgfCQT4nQiXbH-rQeG/p.jpeg?fv_content=true&size_mode=5',
                        price: '13 €'
                    },
                    {
                        name: '1/2 duck with pancake',
                        img: 'https://previews.dropbox.com/p/thumb/AAfAPkA6uvy6DUDP0SjeuRW-K_CnsvRJO1M-g_jgLU0QMCmPE-JlsPXOUUd5rS_GaWtA-mxiV_V-fiJSp0JLov9p5IraxRqWUmk_-LjE6F3g4tqU6jsrlJuZyeYCksl6AYi3PzsIcQJPZ15buA_qgxftY750XVHEW2bMYpVBIkvSkJO5vtNNx99KWg71lEwpvX042fezHcuv0mDqWue8Oumcm8jPvSNnqbLTdoBcLrqaTdwjZrlWoNTK_TMYpbwWhpU793BTKT2Unqwhh_5l0LCZOhfK_L5xCFMtUkRj_1sgC7l0YVwbAzXsCuBB-CoaQHzp3GRgfCQT4nQiXbH-rQeG/p.jpeg?fv_content=true&size_mode=5',
                        price: '24 €'
                    },
                    {
                        name: '1 duck with pancake',
                        img: 'https://previews.dropbox.com/p/thumb/AAfAPkA6uvy6DUDP0SjeuRW-K_CnsvRJO1M-g_jgLU0QMCmPE-JlsPXOUUd5rS_GaWtA-mxiV_V-fiJSp0JLov9p5IraxRqWUmk_-LjE6F3g4tqU6jsrlJuZyeYCksl6AYi3PzsIcQJPZ15buA_qgxftY750XVHEW2bMYpVBIkvSkJO5vtNNx99KWg71lEwpvX042fezHcuv0mDqWue8Oumcm8jPvSNnqbLTdoBcLrqaTdwjZrlWoNTK_TMYpbwWhpU793BTKT2Unqwhh_5l0LCZOhfK_L5xCFMtUkRj_1sgC7l0YVwbAzXsCuBB-CoaQHzp3GRgfCQT4nQiXbH-rQeG/p.jpeg?fv_content=true&size_mode=5',
                        price: '46 €'
                    },
                    {
                        name: 'Grilled mussel 7pcs',
                        img: 'https://previews.dropbox.com/p/thumb/AAf3wZrvkraGvvf2EdgdQyUKspW5xykdnQLCxxNHF0rDQaaaH8oCDgtE2BzTI-CpNWABuflpDf7s0zRQNXcF3ck0N-RuFP685frjWu0xScK3aT8SlXhA4uf1xSUxpxDP37_TYOR4pCDilG7X2FSUAbH3GeSrvEpamQoC1cdZLiwSWtpUFuGR4PeHxrYHGjZjKQILwI8NC9zakuso_jutjxMz2xbVr_OiBycs7kfCKK4jP4DNG-ep_D3DuabdntH7XzbUrKod7Z8U6ODgEw44wG3zW1ZAAZwEHC53rdkNhzZsl2zNmPRJxrBlbriLjx7VlW7_GNhaiNoXTyhDxPvtFYUg/p.jpeg?fv_content=true&size_mode=5',
                        price: '14 €'
                    },
                    {
                        name: 'Squid w garlic',
                        img: 'https://previews.dropbox.com/p/thumb/AAfJDco17dL4hYsw3jA9qX3URPpe2zOOx-pnjJL9znUDVKV94_u3MPk8_aLj4GIcJynLfj0JVd1zQCFZY0lZSBpVDr7Gj3aUXRi350fcLSB6xRJOluFec5wAuJD_1Q-Yl23dp4VWUO4yXCMijtJ0uVzWhL5UddgpubntQzoyw3cFRg5DHMOAh3F19Z2byiBrO5wFZnCj9Qc9EUAnWEKgF1fVm86z2luiFlmUH2PJld8oHyLPCX0JMhsb1iwZpdG1di5NCsoGLEXVMyM7Q7C7TAKKqw44I1QhSNB6DEKIbdyLq4GXZfZm8-wxm9PK-l4_ia7gClJ_xU1vO6Yrkha6VGhv/p.jpeg?fv_content=true&size_mode=5',
                        price: '15 €'
                    },
                    {
                        name: 'Grilled squid',
                        img: 'https://previews.dropbox.com/p/thumb/AAfu2ob5GuwCM25LJ31qMtz4BNCXUNHsRrEp0inFYyaArGYA5iQjDrJyc6tgs_PfWDEBIOgNty_42Sgx5dddrLJpa9cIrxfhI0JKqGNIthEOLm1bsTycegrsBfJtjAWWKOQT-42kpj33oNXhJsAQwjn7U_1VUdHsQ5vDaND_FJ2bzea7C3qbjfqXHizAblaHTQb8cACth0HJGXolPNRSBCm2g6qU5_cD1rI9IQW-9F3np0dPwEl75ZfNh9dpM9mwE3khn2R04ctcuwois3C_xLzcvAq8B3xPAPSzNSAUJqIrarNdbIetBQ4MLithOpswSuMPbqs87M_8Jfj2HUFesOow/p.jpeg?fv_content=true&size_mode=5',
                        price: '18 €'
                    },
                    {
                        name: 'Shrimp w green rice 6pcs',
                        img: 'https://previews.dropbox.com/p/thumb/AAe9oi2_2me7ew50IF-SMznDjvkwzf2pBHmJbYKuStSSqUFQp20-pEJjFPMhMkH_TX-8rRm3Ij9S0w9C2vwS1QVWEV46LqydpJCNdQFmP8LUUY4a1Dk56J4IdaJDjeD1JsOv698MI2I_Gb5HH_sQKxoUrb8TNruzSxccUIFuR8WvGQytEgSLiZnQhCUbHUVpipXV14OCyiVpSO9vxhWJ9dARIWVwKATSr-hGMIdupN7Y08IYcpEUYJM1c1szyAmKWilvcUSwZ8N6DXKeJh7UtG1VuAEf-se-5en1iE8W1gvPLoS6nLs0mn7NE6rGFNQcSDTm--f8v_r4WbTM6gLOHnuh/p.jpeg?fv_content=true&size_mode=5',
                        price: '18 €'
                    },
                    {
                        name: 'Grilled salmon w garlic',
                        img: 'https://previews.dropbox.com/p/thumb/AAdVeROwUYnhxJEOK5lXZQzUMajn3c1XNuvy-NMCJJ1LMNgB0rOQS_sF_0nMCRxgrTQNWCHM-8YC7dnXly-OjI5fGtbQQhnMjrTdlt6JpdvHu5aBdvELx8oqPdUppeRwC5LbbtORojztSUrgVV_zlmyBTNQxSwqu4IIusu4G2wVW0tSfATw0yi4bfvs3f4I9JuDeDkq61InIMDSlDJL1EPi9gww8qscZRqugu8LVHoWDKH0HqZ2Lmx_0okZTv6cREHu-0LvRg-9gHyqV4YzbZXpV64jH4JIxXB3q9IMZF0BPuJTwZixYX2m5URGiOD9QLZtdSJRhJhvKLRBoix5R9f7e/p.jpeg?fv_content=true&size_mode=5',
                        price: '20 €'
                    },
                    {
                        name: 'Steam fish w soy sauce(1000g)',
                        img: 'https://previews.dropbox.com/p/thumb/AAc-rPL0dQa1N9K5KNufr9Ytes7Cl6fG2I1gx6Gd3B5fUTV8LwwGmzyFHOl7OS3e0lbf4zOBfyTej1aa_MFqLPPzgPbBY_GXjsuMSmrDB7HZ_VEn9CKcgdKgDITjBCstmNI2UDmCxP70DjW0IyTCm4h6VZQZTjzKUklCHgsfHPAHeW4fZGCWG51jazY3jYtfLuCcx0zaun-YEZaAb5UthisrT4lpT_1GK_QEyUfWokthSCVsaSXZBWKS-eKLIrq1ETqDC2d0H-J-ieyYPDeURhhfLfbEuplaTgbgACQnR-0Dp_by8yWeNbAiXejKYtmyu-dSObp4naQa5p0QEVjwoaA-/p.jpeg?fv_content=true&size_mode=5',
                        price: '30 €'
                    },
                    {
                        name: 'Fish dipped in sweet & sour sauce(1000g)',
                        img: 'https://previews.dropbox.com/p/thumb/AAexezCc7sYwKZXDWvdktLltmsfLHz0tJp6zx2W9wdjtdxX_xf8T_K3JBBNjm607QJzawzemegoeuwS5m7hvFDyp_ih_wYkSl9CUJx9Qlvx5hab_UkSdIFmsYGsFbkF_4dF7fJTdWHs9c1aXaGqkPKlq2wubQAK3lJKTepd0xb5XRyVFqSRiJ9wgRd3mjXbi83654_3cidK-EFwLpczbD0hIVS6v082y1asroBTE4daS1pgbexE2kHxblWoxqzZgaGb2JyKZvHPf4bEijNyY_bFhaPHF0GLfP894LAUgjTfGWEpdqawp_BWldLvPicrVqYMQbiZli_B92vwhMAPx22-n/p.jpeg?fv_content=true&size_mode=5',
                        price: '30 €'
                    }
                ]
            }

        case 'GET_FRIEDRICE_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Fried rice',
                items: [
                    {
                        name: 'Fried rice w vegetables',
                        img: 'https://previews.dropbox.com/p/thumb/AAd_XuAhKDkbLnuEnL7VeI7H03FZKWbalyznnTg4OW6vhra5q16jZKYPBCYqXb6qAvn1svHSNwgSffEFSNRjFWwy2BrV5EbI4GxAqTtVJW9s_s0GN7PV0VwZBBnz2bdNHWmG3ZGTP_UP4eKf1hJpnTi2zadiuDc3XqUNyEurfhtJdD9HRgPslgtZ2_Gr3xXQLqDMG3pwZIBEDaHfOT5LSMjW4khnJI_3HI-btjbWHNpBv6LJH-iN6AYA788tou9YCwCBbQbSbwZ_N4NCksv7BOBQSG8rwArxJKp9IIvuu44_6zux60Qdn7TBGzFNldBkGS-KVLISkYKJ0T2eoRG2UMcv/p.jpeg?fv_content=true&size_mode=5',
                        price: '8 €'
                    },
                    {
                        name: 'Fried rice w chicken',
                        img: 'https://previews.dropbox.com/p/thumb/AAcIHaUl6vsuwDYrgSaj2KbgSN1_w0mzbwE2DZcLa404p5h_Ns-z4Tsc4pKg1lC-PbyKeI4ACRKOoN064fTEyHM4SdwXCNld8efrNo3qUrUztlUrFvmcCQMeYYCDhPjBEvcScQJ75SKjOnQpdtVWkdD43NyLZeq81HJDC4eh7C-fJp41jztJSZkIjfSYaHuxHCzSYhsUbXnxOeUiWlIuPhO8oztykNwUImVj_6oUwJx3DkONphJqYrb0Dze2D1Exy4nPT8s6CiBEELVIzXHq2gasVfAYbjcaa7N2zj9wjk1nXk5x_z8GDSkHiklijg99VprcnbtwgRyGZfY1tD4aaH4E/p.jpeg?fv_content=true&size_mode=5',
                        price: '10 €'
                    },
                    {
                        name: 'Fried rice w beef',
                        img: 'https://previews.dropbox.com/p/thumb/AAc12mLSe9dmJKfileyekEh0LBMMtgRhCOPrjwwqCahu_5pdoWK9nI1KmoK4hM8vtX_Y4U9w95Y6Kf3Wg78mH_vNRSkehwTkaSnsV_seIM9S__vA05LV7gq-FOzDLCX9U4StzpWw81vgrCrDrIwnxPI8kpg62SMxmAMb9KJfkmbt7deHYevbArrJW-qAIPVYJfBMKO_zeeMAAs9ZN7f2yu7aQ8OGDHtqd5qIbUkyAMm3C31DKBMdFR_NJHvliQQdqDR80svee-yl50F9m0mrPwt99pZLH6C9fBE0ip-4wqIyZQlVgbdE2IR8LeNlBtcM7ASsoGBMcAKm5umpZW1D58Or/p.jpeg?fv_content=true&size_mode=5',
                        price: '10 €'
                    },
                    {
                        name: 'Fried rice w shrimp',
                        img: 'https://previews.dropbox.com/p/thumb/AAfxtWFz83SGtHXQfX20eTJQQEIqKePkD4jL8FsFlh4ZceHqwH2bL9W-xNL7M4jO4CpuVLttch2N874oa1rM38RgGEkaUnoJGl2USB6CCvwanDY6vAC-7NHsYgXnUT-nL6y85Dbxh56AUDGneLcAFdeLh-Nobq-PmA51NrClDupIjgjO8PY2B9G86Q8c_dsUvyjrZSSq2LA5R0yZUvrIwwuU7sWGdCuY9BTHy1SLp7WG5Q6vit-5AiVa8qraVYfEvs5ErdLJQ_enMfq-mbUojZW8M7RxLvE6se4vkZbf94lV9mZwHM0L8QiY3GTIxF_3i083WHzi8Ysu6eO2sQmGkt9q/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    }
                ]
            }

        case 'GET_NOODLESANDPHO_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Noodles and pho',
                items: [
                    {
                        name: 'Pho',
                        img: 'https://previews.dropbox.com/p/thumb/AAcsZG5ifIXWqlxXRA6jTcBjwTHIZiN0-u5eIXQMmErrq7FhHqX6ZiUKXLK1305I-brDL-OCpQwyKbHDYbqpnxaZq3UWLG6NLO3XiSukrurvfq45K5C7fCbezsiv6eA9-Q-SLpBLyRyhuEkMi08Eh9eD8niisR85X2sFgKmdv85lM3yxU9R7B-lYdrig5PLnFJfs3rme4FDh8flqqH3oyleLIS7yOXi4hdfl6Gw4Weg2vqaOVrUDFu2lZlF_h4yQItobH26mylZY1ubYMJlK4D0AqIKjFaowXat7YQEoF4y-9_LzaqlMsvi9Rok7dXqMD-Wz2-uLe7nuwG-gGSI22iAA/p.jpeg?fv_content=true&size_mode=5',
                        price: '8 €'
                    },
                    {
                        name: 'Padthai w vegetables',
                        img: 'https://previews.dropbox.com/p/thumb/AAeculD7UySLr4R7WaOCD-VWrmBUuwBsRO3DwmEqmaa86nyxaCKsV-N9ekybEjt1lEEHX31ilnNqw_ZI4rSzCrxXz61FgPME4K_NDF_SVHm56_uUZD2S3q1vyhoWpSJ5eF56cQlkDYLRRx_p7LsrMS48Wv5gkOzPDE6_PPUUcfP_2OYTm0Cu31qAFbW7p06T9pkUssKZl_mLyDHS6f7vqcx1ZkKhfoCg2oBEaJ4LgDFz3fUWUEmwmrCPSBA0YM6QscCAFhAVUt_lSbRh6Qsr9hpTCP2AsLbhTybhF5S74MU3DfgcRFvyBlLOqdWprXEn_ZhMbQ-9Nqou5cvPm6ZXzCwb/p.jpeg?fv_content=true&size_mode=5',
                        price: '8 €'
                    },
                    {
                        name: 'Padthai w chicken',
                        img: 'https://previews.dropbox.com/p/thumb/AAcfN6VyVxOqXqbspdAgHngMo4BMa7m_Ne5uW168F5-aUHd3zVlCL886dIdZ9CsXOHLbpdBsZG2BQpbSKix7qnRcG93oQECk2MKktJXFQ2stJ7r_rJdmWU0lv2tzHACWoJEATlwBayQJqIf-7FIXtQn8UMf2i1s-pgHln_6IZ_OBYQG7EAHzyZ13JBaG_ZWPo9RAwcGtOaNC93sYiFvLEdAVihikzvfFIjZipMLBqJzeTLBRffcZsqY4TlOULR1woiC75_S2bmYE_c7g42CUIaNG2IcOmtilNx598qlcbEFn5Yxvc94KBnh7uyvExroUqNmTPpYM2ldBAhnTg9B725ax/p.jpeg?fv_content=true&size_mode=5',
                        price: '10 €'
                    },
                    {
                        name: 'Padthai w shrimp',
                        img: 'https://previews.dropbox.com/p/thumb/AAdiHRsLCIjgBS_tXaffvGcJ2J-EAEZqaYcLS6dxCuhpYfK4il4Lmmj3kb1n2JFcvQ2ckunqYq95wWHOoqMyhCs6bOw0Jpt62YCPss7bqettcYyTk6-i2-HbaxeaGRyG9d96juJDxrhUeUxFaMBheYlPrqUg5Giin-QrSLLF1gHbPAKsZYVmpaw67Snc9r48xmFOqsQjI_9JUBFV-XYqQhln5fQsy-DQlUNDoHRMRsvPutNrJgfEtcleRZzS30OCt2XPLCnD53UaNvuppBYaAT_4fptNBBXwQG357R1pB3MLZVKKoEmmHTka6QYyE5Mpl1FRcsUfa_Wqbr-NJql1auUH/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    },
                    {
                        name: 'Chinese noodle w vegetables',
                        img: 'https://previews.dropbox.com/p/thumb/AAcGOJYBqa7eGs933LCTfaLcvFBxKIUPcpN2VgiwvgXs9RA4hzvpe7-fRHFDALAmMZfgmNNnLGsrL74EB5osJq59-RcqR0uC9BLP2NUxUsX36VRLQys8YrZs53opSv9jRzksVvNRDw-onjphZZVQRT-w0sFT8LcgjYSetkjeC2iDAA7KGfdzDI7hmqtjxiUmU3jt3k6pW6ipRHg3Uf349yuqsulriB_Fl9GVR3YDgPjzbsSd8KHVHkF8AF88xTsptXAC9XVQfKPxqmVxCNPof0TZ5K81J1yhy6h-cqDCqyx7qnLJu3NFT419yxd7BIJTAtGj5iXUiOrbo_eRQ20y85ag/p.jpeg?fv_content=true&size_mode=5',
                        price: '8 €'
                    },
                    {
                        name: 'Chinese noodle w chicken',
                        img: 'https://previews.dropbox.com/p/thumb/AAcfhnrUkFMlsvQR-GL9o532cpL8s6i2c5UrAuaN87qRwtCmvz_Z0xSS9w7BaS7wv4MEti7HjkySwpo9GfLC5okzp46vpTyiT-_M_xgPgV6IESoh0pYrbSmlC7gbwwpmI5IVB34VLekGZHeihgHccdKzCbLzNVtbGBDDp1W_8fxNamaOBxfXYx1vK1gvMP6vAH6LGFEpqTFy_5K_F-pN0_2cY8G3WcOTNcHwWrr0eoq1T2sI1_rLCnHukWIbykqPw7wimEg_MItH4jJYNgTQkBJT7OuoKDjhO1egDZqGbDUcBJSphdlhuUdWEVc8CXB7nkHQLgOvoLBs9O6Mz6tgzJaY/p.jpeg?fv_content=true&size_mode=5',
                        price: '10 €'
                    },
                    {
                        name: 'Chinese noodle w beef',
                        img: 'https://previews.dropbox.com/p/thumb/AAcHajH3NHzexZ0pnTWQrMLhtbax5XTxvZD-GpitM1H38eqVHdxTMrjympKZWslBrVVHwpwpoMGwdIYPIvP9Zy0L6v-0mLw01cYi8ODRpdHWBIiDVhqhy2gmdqkUPCM0ZZPOqqYprKW4AvaQuWoAOY2_aSCQ85wl_hBBXvYdz4udIwTqVugT9iGJwIfl64TIfTVHLpwhQQTBaXPE46l21LcSYbeiJwg_vbwb8wfvB5mej-jUjpRJem11tp9ci-jbnhGSc0IqpV3-fSZk6Gn2pJw6Lg_fYSSU0fgkBw0ULJu54WFHAu6luHA0faeBt0LbAWnLzcLpM2ro7EEWJysWo0Hl/p.png?fv_content=true&size_mode=5',
                        price: '10 €'
                    },
                    {
                        name: 'Chinese noodle w shrimp',
                        img: 'https://previews.dropbox.com/p/thumb/AAfIsPJXB6LNmMJk7yHdIoaUOWBWMH5AUr32f_0dF17ctwgIGo124WgEImU0r4hZNX4OwESCg4_LMipEnqivWCZXbGYtMUwYl9QPr0AYutB-2BCpiIgZ2BC4jJssjvY8wvysxOtPzZI1KqzsWvlqt_F4hK08wqdQv6h7fdPACUx65l6qU-4QtHFK-oufphewmy7bEJvW45AuCqlQyVwcZMZyUOnHr0qK7aV3JqF9MafuQBz8u6raC0y1owMACHGluhivazx4BjuCfSdLbkBFohXJHnM-IfDrYsRvOHJzR9C8r_RqjPcd6Uh4YjG50EhpgbYhjhSz8eX7zGvNGbgO0aJJ/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    },
                ]
            }

        case 'GET_ROLLS_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Rolls',
                items: [
                    {
                        name: 'Spring roll (4pcs)',
                        img: 'https://previews.dropbox.com/p/thumb/AAfRmNmR_dRBSvg4aOTpPMhoXk2qiPvQsTtnSkEO7SUPTbi8Mi9i4plVvIb1Gc9aokcKUtPaHEKIfaQGZBU33oK_S-0QtiAA9pYaOrAFw-awF9dFnB6wia4vbmL2PYaUTPy7Ssed7fvMKm-Qn1n-GnCRUkmzHPoFR7NCaIWoq0JYYC1QvkLzPu78uoH2Y-peWbjuwm0RM5J86G0umfOvcT2lSmRQUmfrJeDWPF8AxvFdcXwGR8wzQg8DWDbmsxs8eE8Nd-BLh5309ySBcLvN9dvXzYAFZTBooaVjJr8Q5zMNx-mta8GpchTHjb_s-ink0NWLYrCZzgDv__GdfZ1P0RCP/p.jpeg?fv_content=true&size_mode=5',
                        price: '8 €'
                    },
                    {
                        name: 'Summer roll (3pcs)',
                        img: 'https://previews.dropbox.com/p/thumb/AAdz15hKbDCeI_5QUjQoaIBeZsFoZ56jPI9rvOiUJ8XNea83Thb4g3k_rNd9nVadrB6zJ9GD8m46BJ-Uu9dAUiEz2G24andvNvXb2pBHfgpMWuN3i8brGB2zw_NXArqPOVMKlCPlb5zCvYq6It_Lpr7amGwB6JW-XnPMSP-0LgqUIWA7HAQ0EQhUIMrTaQrFnf21EjHfGqwB7ZxGP_osBQuNQOHYjNhgFTYq0lnnoVVDaAoU4gs3REoIaFSDBEfJ0pkyss1vxBNsiKf3s6PRqzYrGUoFXzcrZTrGcfBwzkDHfomuRC5U6Zz2Xk4hZhmX9755LEZBrbGh5rRbPvONdMhg/p.jpeg?fv_content=true&size_mode=5',
                        price: '10 €'
                    },
                    {
                        name: 'Seafood roll (5pcs)',
                        img: 'https://previews.dropbox.com/p/thumb/AAegfuA3bbQmaBOX7N_1HTjltbeuP0NbD4TPjDyOiGCEVtgd8vqd4x0XM3APDhWq5XLz3Xkzeo1aHcjwt8t-mJQEnUv7Hu8SnURQfuw7MEgAD1lytMp9yayz3LSxMBIutWTeh4Rm7FGYrGJYXGdTya3z-dBOEGIr9mxk0pXGVUlMEJCMjTO7KaFyxUx7y-hUFldq4HpZhGPwfZtVCOK3wFt8Oj4KZ6KcBLKoojNfebn5Zkx1aNWjJUGKkjcHNA_dBOGMPZe06f9-xGPb7vHldxmZwzQXtSnBd0u8LEKpDBBjgRHXap7MAr4q78N4QKoOxx8ltfWhjRYQiVa_d0AzOchy/p.jpeg?fv_content=true&size_mode=5',
                        price: '12 €'
                    }
                ]
            }

        case 'GET_EXTRA_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Extra',
                items: [
                    {
                        name: 'White rice',
                        img: 'https://previews.dropbox.com/p/thumb/AAfTCUNbYEXvZzgLFimDG7P9EDkzEoYSzeYD7yyADBNTMAVtiJ7VgYWPbdfQDV350bq1aOj1KxNSh86WgsXb_ZuFibb2cqULapNbaVoolVNVif31Ou8znzPKRpwKoAKKgwn2expSR2M83HACUBWlTMbJrjo_Ev7hw6mVEqjcrf86QtsUoQIeNBtnsSBcJYYqWIqF0vM9fupUB78CdKFB_bxzxp3Ou3Wt9-YTc78u_vtdB5dpb8-kzg7NQ1hNenWtz5PWs6jf4AVcOWO077Gsi3ltpy3XnzIlZBwo1K747r7FizQhFSiEe014uQezCe_6M_3BHGDHFhbbyEKosmIG-7kX/p.jpeg?fv_content=true&size_mode=5',
                        price: '2 €'
                    },
                    {
                        name: 'French fries',
                        img: 'https://previews.dropbox.com/p/thumb/AAfaOX_iL_BZscbLxUa6aiwQac4dcdF5RONk24wQMmHhItUsd9gNT5POukYaDvwlcVMlg-uXI0uFrbROTcgj6XV0TuboDYmoHy1MTPY7gIC-64iqnERoWZlJ6Qqs2EVbly0Lo3sZVBos0fxZeWUwN0koX2XgA2tb5aX_O3pxROpbS9bYxFzwHpNgmjZ8AViEkhYtOntIdF-f2TyVAMU45gqf8r5doSyFMneTf58anYRVj9z44LT8WonDuz2HMVuydT77q97csWqEGmmWwBymsNFcaHeNntmFHS0RhAXDKB2Hk4dQUcuSGe10r_TCX4C4FqBC1bJX_EtNljptdwM3zt_G/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Fried rice',
                        img: 'https://previews.dropbox.com/p/thumb/AAfLtCxO7RxajsVmvePKiD1DuDWj52Cc1eo5L2hctIw3e5KqcAka3xo4hs1QdT00QmPO31Fiwn5QFM4hEMfrO2DKGB1fMONwjSxgY1rfz_qk3xa1CsOOstdZRa4N31sID1nZ9pdjVnvOTspN4kWwvNn7UlM8h5_wNprbWdlDc1FlAUlwl64nbh6XdcThqzQQ1UWnBrjl41XFNlqDXlkpZ0709ct-WyOZJH4-0n6Aau4iZXjKLxen5xCbQVSUonifagbq7DRJbA4YY1rIxNHrbhwlFSNd7bmkV3IyimZNt0ULf55qhFVaFkVhrC-jjOi2yCp5Ii0-iwKSjuGqT1msRBOM/p.jpeg?fv_content=true&size_mode=5',
                        price: '4 €'
                    },
                    {
                        name: 'Fried noodle',
                        img: 'https://previews.dropbox.com/p/thumb/AAfSKi3bk7soDcuDkUcQQ1BDH42k0EAy_J3CHvS1Gr59MGG7Qn7a-oZzv12Sox3Mjn1_g0XnJ6925ceGbhZ129YhDO6uLyTgJraeNzfjW5f-7z6niuw9DvPvzpL74rRjeXurRMyeOVEdDmBiVoGdYBq6puTxRUbsLvgm18yLwXtoDiYVDTcDryVOqo2bxvXvsRshZ4V8K2S-r3BvdIltSZJ33b3x_y2Ylj5JV7KXK77C1xM9JYrC876tLFePB5FZ1XU9PGg5S6gOCNtCPk0DV6a2t08alx8yUMcimEjfeFbEwqkYG5_wDoLnDMHUlzh90ab-n-TeGSZBIpDVhsmXvMJ1/p.jpeg?fv_content=true&size_mode=5',
                        price: '4 €'
                    },
                    {
                        name: 'Chicken wings',
                        img: 'https://previews.dropbox.com/p/thumb/AAcjHBKUZz_32cM6uduUduFuvC1rzlCOCCuXC9jlYkAL5VxJXPAlz_eEGZDBnbYH4VDkugTrVuQrN0r79fO4MpCqRBSsy862uxMzLdSv6NdAxmwzZuuSWIUqw2GL0NpHQdH8_tXx75bPukn6W3fdQY5JIen_Mgp59WHPeAv3x7YhygBI12PPY3Qy33-yqeez-XFO-SoQUfplqVuuXeu4auJcFps8Mu469cwBixiJ6bQ3x5dClwCzUgXT_NIz2xm4JQkE9w8F-a-8pkRXIQZ5DaWbaEml2wPRTPYc8hbcbEwXHsegvyL1KzSKEjSCd6XUJSmMCK9yiANHt7re3lkSqRfK/p.jpeg?fv_content=true&size_mode=5',
                        price: '7 €'
                    }
                ]
            }

        case 'GET_DRINKS_DONE':
            return {
                ...state,
                loading: false,
                menuType: 'Drinks',
                items: [
                    {
                        name: 'Cyprus Coffee',
                        img: 'https://previews.dropbox.com/p/thumb/AAe_0pq-_gqX2UOxWmAM4rAQD13rgDZgYG_9Sm72O96-HO1rT8IsWWM0fkBf9hu5oH0xpcwlMPLHKQKgmGl1-L_JHfSiaiuMTXdUqtaNejJ3Mno9LOJnc0tJXKcfKbz_GXMTFXWBjYpB3GG1q6ZsHphjaCbqDyQOwV_eHDFvTH1xD3sFVptKQHJGCSpGk6aqgbXRaThxjXGs6DRzz5dZO8W6ckDlUSrAODgjm4rlMZ4mCi0T4kqqxyN5ZMNFS5qnLGzQRDTkb7izybuManHA5_IKj6IM_yUm2svbOTTN-NYKZFSxEVVTNzlKlaKseWchC-gkKUi1tTA6OcuhacornrvG/p.jpeg?fv_content=true&size_mode=5',
                        price: '2 €'
                    },
                    {
                        name: 'Espresso',
                        img: 'https://previews.dropbox.com/p/thumb/AAd4gCFhsmvXEanEKlQvbVslAfc46Ux_dT_Iy7at6hXqT9KwnQKn7KjpF5nepChobejxdaEs2wrURPpss3tW4vISrgZOV8U6Blj5suXujIuriFuda6qx0_AZZYB0tvRIpOWnM3Osj71yoYUKZw-IP8BuinPqZMC-O7UlklOqoSOFpS3vAQsEZX4PAWhqYm-ngTjPFYnuX5c0GikKaIIGvFsHwBKiFHyperW3UZtbD97GCxD1ijnvNXEXl-SLWCniiPOkWhqQQLkug5H20nGi5TgzeLsKKZQWgsFxVlJPiHuFQt4b2rOkxZtj39GYsD1QYTLuftW0Kx18DmpxJ3q_pZWj/p.jpeg?fv_content=true&size_mode=5',
                        price: '2.5 €'
                    },
                    {
                        name: 'Vietnamese black coffee',
                        img: 'https://previews.dropbox.com/p/thumb/AAcuSTOq1I16q3a8-bLaznYB0Ecbeb-6ac4I7ePSeS9foUmIQi1lJLvlkttx7ON4JSLhLzPNzsBfkyO0CtXnG164EmNzyDu_HxPOwli0dcUMlvV0HAkZV8Xcp1_fzAdEt-Zng1tfov43rNT9PZ1dgLPpyPhSiC417MSIWG6K6J7hlrRyMVx2wNLxAE7YYOq8i_6MTpONO4hr4Ysvw912CqHyBhKIHiiwGTssA-OSQ-Xc20dVur3-A1HTPx7Kepb2EbGpJ_s1NnZ7lbMEks_LyNNGN8Ad_kFf7FC2xn_JFVZ-Tj_BhGvLuhHCPhW8PXeT1kL-9tLOZCuUSwPnh1ykRvwq/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Vietnamese milk coffee',
                        img: 'https://previews.dropbox.com/p/thumb/AAc7sSPmcNYimWZnRJ1TXZ3fygSYqmnN5jYiieC9_63PjLUN0h8z8FB0T-9rldiBYCECrEHgvw-TcG2HUZR0yoddmFI2Y7kieZOZSJSSE6gVxKIHymmtVc4xVfesFqKoOzToRzVTDqBZhHtjlb7l92p3x4Z6mFu7HAiYpoogtz3E5shWlSWBA4lbvG8XXFiMbRQQIB7OfXJ2DiILLiQuRyoyFIRfZgs9eiAdrs9911zV9vjXCKiTiH_Qp0sVoCLtS-W9XfBZYPjS_f90UJAkTerSlQm-QgZQGdmEjJAXw3A9-0v5W1IoQF8VqTjKMy79-6sxxaHhzRw5xFFET5vkSzQx/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Cappuccino',
                        img: 'https://previews.dropbox.com/p/thumb/AAdnwA6lJSf__I9MVRM7_aqm4wYz32QjXKtkR4qIkmym5Pd1nqrdK-d39lAbmuW6Urh5AMub6l9BoFW2QbpKmtk2SOTLySHuVOUo8J0u56RNLIodpTZpYSV08uNI-gpx__QFDziE5jn0ctRWk5Xqoj9md3U7thyBkI5i7KnNEvXjTiaFK6mT2ovEmyZ2d0Cbx94ne-jmHY3GmdgCnOQsNBjHT8POlc-v2zruYIHR62QI1C7eskyslKy9sug-dlwtWy76e7C4kHRKI3n1PMom5dSaOei6T2SZOUuaz-gwXJCfnI5PPjX0NnqQ2f9_6enVQcCb0X3GUMg0m1B_XEl-0dDu/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Latte',
                        img: 'https://previews.dropbox.com/p/thumb/AAfDdujaDCzBmxvOxSmJa7gJjip69DM5U0By6tHtSnOpgIL2flYCdzWNQBV5Hm-bHO8NpE5BHf8-QaBz07mEZMpnBio9dFxi6Lq-iKuulvivdPONB3oUxqtSSJ_DrrwCM6gM8aJfn0G6fEyRn7Xdbd9QnGajVZDvCYPCSYB31pgu5c40F4i-r1TMAx-4mtRzuy83nQ7RkMh4L2xDxtQA--OJcrxfi6dX5F6Kxw1TXxENSa3FXi6agR-OXmkAN4xDkGfqh-7V8IymXhtdxwhTb7nUxtRzp8I31avqa-2k78sputt9TcTvuwniXwLd_m-Gq4VMcV9crkqbdiTewr7R-4ke/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Americano',
                        img: 'https://previews.dropbox.com/p/thumb/AAcNiNQs-E4S5yrtQ0iEupuaXc6DTdfa8XWhkDNwp33doobJfrMyn09n4tcfn2H9xH_hAJXVXuYxTj5mI1iFxhpBs84mxGHNG_MMrSNnffpCozUm3Jc6Ejm9zvNm6ZzN7E9BqqBR9vo3LVsHzk101jb_43q9xVW2T_6ATOk6bKcorkONY6tXotSwLoc81_xqtN2HEZUZzaMArUGXj7U6yF7QgrJ3bNlFAhxdOYe_Osxdd5hNpw3Q0WlPCGU1wKA_DqplKiG2ldLFZEcv1c3KY080_tEkbd5aCwx3RkT6Y8T13P3KTLaV_w2V8yuaYcfx4NgWO-2GMCyXs_clAJmEOJqh/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Frappe',
                        img: 'https://previews.dropbox.com/p/thumb/AAe6-yjwtxBJsV-ZtNJcW21xZ7aG-YYLpZ260ZvQmUCxPDwX8tu7M46hnuMlnss9mCzTPv897NIznROAb6k3k9-xUBKdjaFtBhNsS2zbv4ZtnbdjMTG9o8s1x-Fmg-aaN-icmk8l3zfAeRCDjcRdTFSb4z2yclu17pvRyHIAdUQkhLrfRxpsUklcbj2M8FP2bQie-MCTElkkvIknY39iM4nyB6-vv1TvboNm4-7KrEe0-MoqmtfLomtWorHmSWwX6xM6VeJlsrcILoRKfimrqfVm18hoIB3KcPmgBgdVk0JiTjWeGabUdi185B-Qvd3VMzTZa-CIMEfB84KpO1bxU-eG/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Hot chocolate',
                        img: 'https://previews.dropbox.com/p/thumb/AAdTvQOilrhCmAsnRsiO6VF4E154EOdTfRe841GiSjttdj152eItdAPSiLvdzTJczGWFvovWeYboc1VgYrQzwdiiGNy3F8aPkINSrgQ_16ddldGftQbmxFhzm0ePmKJXFz-LupKyESyjpvzUxWNpPq2AxwHzTMpLkoXXRz0e7WQqqYTZM_cKY3Svj0TnaSU2pHZfhY8Fd9pRZ_I6Cq7LgxaOorHq2obbf91iy9UgQak1IoudFg7HvAHDndWmcMQYNdcalazCxeAt3UI1HLcZ4EtETA6iuLsozBi_Nfx30YgfVEGp6hUDCvAjE6GTXplKqjS2bP2zF4MTvmNI4RzDcgGZ/p.jpeg?fv_content=true&size_mode=5',
                        price: '4 €'
                    },
                    {
                        name: 'Green ice tea',
                        img: 'https://previews.dropbox.com/p/thumb/AAdgKEGvqPloxwwq0vaSoCgFZZEzhM16YfsBpH-NK33F3Jb-oKmeYosYZ-PSesYoSvdLWna9bMXa6e5h7Lzi6n26-qk4nnA4ivF5veDSzowD04lLj8lkcD6NuEWLMwpefAhcJTqKb8vfdU9CLdVv3hZDfW-tXfD4TPMqFXGXUNAVT4qOnFoiW86jIDb7Uqwb9tcFvdUOd3u4ouPK7iTTUE83c0A5EHCCfeSIIFBc-uJGsapA8vpFNxCGRDS7RxaZNbZ9whB2POe4LK4Hi0H1d6-UG2pKL5YqjJMvFPljy17yZ_WNF_9dPbx9K0E3EGzXP505WqG-wLZa0ZAoW4dW8lNF/p.jpeg?fv_content=true&size_mode=5',
                        price: '2 €'
                    },
                    {
                        name: 'Green tea',
                        img: 'https://previews.dropbox.com/p/thumb/AAcrNFHWyI0ditF9Gb8G8wG5lIMfOJFO4S7ZykrOCW4huOZFqI5M4LxLIUJvuqVjVyxaThh9OZRvfN5QmKlTEWGLwehUqLHnMhH2SEeYe2Pcjvq17ICOtTS4DleonJUaSnOHIz6ECHLqhttIdzQafZifuPNZLhdBcFzyKwdAYojhuOLU1amRDkdl1-FoF-YqNrcex-pai8gVJ5_Lfc5Iz23vxWlVpIL0FLFNhHlxm_ME4NTif4buIvJ77r-NOyW6lVuOIxuiY5-dHM_PnMpJOqvPJLEmStt1PDblIAcAP5YF1LLUK2cgbX4oUIYi--JaZ8rWDeu_dFNiKCFe_0yLAT-Z/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Lemon tea',
                        img: 'https://previews.dropbox.com/p/thumb/AAdiXZoDwzrg07f9cC_yAfCZ0o2F0AbHH_gxAYZgcOoXVBWJrWCrI4nofqCyq6VkIy5jEt7Qx-M0NzdBWw-XngiAvpd041P9OzQo-qudNbOjsaYzqL4Q8bhStVeOLUZn9biuhFtSDYdtoqUYXT_rhvyYmBcr08oBzTF2WM7u_8srrSOlEzBCL-Uuw9SJwmqmpD_EIYRudx0E5hOjz--tg0r2BxodW0r12klQAskhiohcsRVNToH04NHS3XPfOAco9OWHpMv7jpXhLWSrsds-7f4X_W15b_Ilpy4eEMj9c5sweu2wwaGV_q5A9J7HZG039hta-qxeVSE5BMLT7JxWuM-N/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Lemongrass tea',
                        img: 'https://previews.dropbox.com/p/thumb/AAdJxbCOKzFJNCP7-sBjgFD7-WHLBP9rdD5wGj0KjRIJLd9lwgCsv4t-kiVZUnjYIl3hjz7Ze-xiCEo1Ghq5cZeSHmgQxfRzfm9_9C7tedL-DVF9syLcHD05UD14Y_wVg_w9QTTbmxmQddZAfknbI0I4CYbhKdpIIlXdBytYh7SB_LcZtTS0m9LCehIPdwEWYsju7mZHOaDzSS83E57U233et-7PFFrm8iIlxvKNVm0AOU1brW3AwmlpFdHz7eEzbM0lTJCwxtBgFZZl-qAuJ1XwfPj9633bFe9FBYXzdqO1YW7UJYXmdTNRBh0GAx1kfJMbVejMy80p-_jItiaHEn5X/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Coke',
                        img: 'https://previews.dropbox.com/p/thumb/AAc9gGjqMmAwGZg6wUqtTZbPioQMGQ_v4YM1ZiB5R-nK9T6bxJtkslApjvg6F5qZLGZmcznRqYh0_CoKel3YNiOhpHqyzlo3YuY4fCwjagEx1Ov26zlIuYw46POwJz77tel6jCo-J9jyNp03uqCe_QDMcO87-BAeOMBSVibqbTa1n4OHny8vjWTNG30AC3ITBTiJxRGpQ5mM27Q8wsI5Rpb72517dlSNia0lyuHodSAUphNzoGkS47UUQsuvW-wvRJjV77QGr-ox1wG785PnYjp0hklRcXh2SUlkW9w5C2nuISH0Y-0XyQqJXPnWgCZOp9-NVgcJdHaMQ9Xeb19YZY6d/p.jpeg?fv_content=true&size_mode=5',
                        price: '2 €'
                    },
                    {
                        name: 'Ice tea',
                        img: 'https://previews.dropbox.com/p/thumb/AAc-Fsm2hFXgS_G897B7irOvD1Na0XXGySd8OPy9jRMyKllP4DuRfDBUJM-r7LXd6y7CHEVd1z2rBhPrqpvO5CIO4Og60dcD7qNITFf3qERzbf92zyNHhiWM-RjKyTY0iwtW2T6Zebvcf0pR9Nc-X1uuZohrQF5s_QM2Ka-idyljLtICcWWLs8R9cg44YpC51VJU0e3NnRi0oj387n9_rJjmuwe755zIGgfCS2S-iihQVNCfkPOzdJOhVgAgqpya-NjOj_sdxnjpt1iBwL23G153LSsOdRmifnRP_70-atS915rwcVJy-TkF4cKlAk_joGY4SBZADWKs9h7WdoyO0w42/p.jpeg?fv_content=true&size_mode=5',
                        price: '2 €'
                    },
                    {
                        name: 'Water',
                        img: 'https://previews.dropbox.com/p/thumb/AAftVvPBwjJQ3Fe9MqrAWsZ94Py0oOUYA1-Zst2HK666KpTY9G5YEytzewQyxLcS-TfrC5Z2B7x2olElhDZpe5_sz5z-rBp1OANHmMmafoLs2MdbISGk5n8AFC8SH7_h-FS-7ItguXiEVAun8yb4q_IXOt0wH7EK99mhSULtQ_fOU79zbNghW56aJaX437Y8Azx2vQsAGlGI83dmzHHi6XX5tGaK0VKk865ppAPE3dKNQ07DysYGjtCyGbLF1wD9gH4qk6DEextWSftr7CSVcwl_5TlNrwXrWtzRr9G4m1Y4APmeWvON1S9VvaFHN97UE7j8biG_YyZBMZ-G0v54lJ9k/p.jpeg?fv_content=true&size_mode=5',
                        price: '2 €'
                    },
                    {
                        name: 'Apple/Orange juice',
                        img: 'https://previews.dropbox.com/p/thumb/AAcqRgAPCpUkIMdfqkxbjI2jzxPp2IU7VH0uqLErFj8nnpSMsDbUHPnEq8di0QqcxXelAF2gclNtoAJ2gATZYN_IaqcFBuO-kgG-_83RtDvxuBxVzfJD6x2O1mNuFJllEpu6JLFxDOIpVcbGO9XnEsxEC2HdH_3Qg_jO8LB95kyPX13jc90tRANnmyZxjyGIL2HXFgl_TY7sDrIS98P18kzsw7PLnnzhEKTswV2yJx3DLOWo6RUByMflWhwf8mAMwOmkAgOe1CR669yuhJuP0yo6KG9OrH_MUE-9FeLEBWcIAwHb4puoPpVGuA2Dlxihvpp5Oue-_yLWNdRB4Fep6BEl/p.jpeg?fv_content=true&size_mode=5',
                        price: '2 €'
                    },
                    {
                        name: 'Redbull',
                        img: 'https://previews.dropbox.com/p/thumb/AAdmFrQRr7YiNdXqNyD_dgpR-EIxkoRJ_LbzsSRu070A_RWfK5vhwZVF4CRlUFxc7wbIU8W-oCiYRc0z5i8w1MdHhtm4I2Q46ZPqAfC4ZAHdLbd6HxxunsD0cI2MZBv49lP13H-_BPYHm-j8TMSEauBYT6qivkdTW8cTPpxOBAaI5mce04Mxs-nSHjcSVxer9EXRc96JT4TL4dP-hPtbrwJ5Su6M-v80_Ya9HnHX7uB072kQDsI__MdPkMzdX5wjn0cI7kEK6u-yOaD9OcjslzsdySGJWjG91Ez8xZgFO0JRH7_0MnnIIp7dWLkQtfGTGlFhsSDSW8pYHrY-faCyJa54/p.jpeg?fv_content=true&size_mode=5',
                        price: '3 €'
                    },
                    {
                        name: 'Fresh Apple juice',
                        img: 'https://previews.dropbox.com/p/thumb/AAc4Ki0LioFeM_w2HMlP44ISYTc1EjvbXdISPsfXJgYDrQDmljdoc5X8X_i965NlNRNwisz31d_GGCxhDkHqgZduaVUhK0b6umAqIOIllZRqkksdSn921HLsJMDux1dikjJdjMxq46vNrj0GhWPxEyRrVRqk13FJ4XreQQ2lolCXP41AMTmreD0IFnApkTC9YsHxJBBQDedagbqdMAOqtLLIWIvqW8KWyYtcv1PtstQcC8Xwav3l9op9W_35ljTwKDzVnn3QT2iALA_eVd3MI1wqYAvsZcvMjgz9b_aiq8hxRF9AlP6uARQw2U4LzbKSZ10pZzRWB32SwB5QnbnRQAbz/p.jpeg?fv_content=true&size_mode=5',
                        price: '3.5 €'
                    },
                    {
                        name: 'Fresh orange juice',
                        img: 'https://previews.dropbox.com/p/thumb/AAcDUa_p3i6cSm94obtmuaBMoTSDVkoJWjHlT0ATNIcHga0YEJuIkJGZy28KC5de06j-oT_2z1dn5Heyh7LAdK7emAEtz70A1hk0f81DJp-2IVTrZobXR-pBvlaLP3N0SURvHw5DyQXZFc1k4FnvwzwOeEjAnnOW2qce0bgr-aWgbEzUbforQWkGpBBe7I404CZSev2nsG_ykOZJWkQO7l6uyqH7xFjaCqMg-4b-NWaOIGWi6S5jkPk4npF0RuuwMnwxcMFdW-8wbRFeJG8hJEwgLjupEUScR3OE8tMBLxuht8RmXmLnES1F7QVCsUjucjkrz7F3j_J3MXrOlco9SCxm/p.jpeg?fv_content=true&size_mode=5',
                        price: '4 €'
                    },
                    {
                        name: 'Watermelon',
                        img: 'https://previews.dropbox.com/p/thumb/AAemqOisRnlYVNFHkNz2sbg5xv5TT0aYYyoDoaxxLhOVc2-nqNFjvlmb3MhJv8tfVdf1CxbLs9aARhCg9GmCCVzQbxITXAnbkoN0oBV5yiQJ3USvYXn9CfyJ0UOPE2Ni_5t0dMoyW79xl9yivvD9bwx0jq78M7AAxbf5pcgw1VwOb9S1TkmACR_Bl89ijfSfsgqsEpXbfscXZ__5CUf81gGZikIjDuFL9rkNrzdUS_qPI_VwdAerUTssqMwCn8um_ssp1onSmJx-XJPTd3dhsLchQcra7WjDTeIcBSDhksdpzjYfmEB3tpcxgSjMsX8xaD-W24fl-8z_TwgETS32ppvS/p.jpeg?fv_content=true&size_mode=5',
                        price: '5 €'
                    },
                    {
                        name: 'Mango',
                        img: 'https://previews.dropbox.com/p/thumb/AAeFwefPXeFeqZrEHy5pVUV-Yy_dbsQnLKd29GSLxn8k1Ig0wxQce836xYAMKagZVtSMSLarDr2xhyCWJ1tSDaYAo3nH1pEQt134hjGLMyX9Mn_s3gAzZy4r3LvaW81wMS5vSX7QEpIBEgGxtByLvHBwGDEQx3O7aJt3RcQ7WVUZXguforf_7d69QnLivKQVinjvPYwx9n4ngwcqIShSj-opRXBrUnXsKTHA0eZyIVnXny25OjQ1XCD_AvDLe08GO3JQkicuvhyD9sF_yKrQwTGBCTF-bjl_X6AE9fmrDJfdZlhNg4bKR_SiJoBvH1_jBGJhhtp1eTxgyGOxy-IgavRS/p.jpeg?fv_content=true&size_mode=5',
                        price: '5 €'
                    },
                    {
                        name: 'Avocado',
                        img: 'https://previews.dropbox.com/p/thumb/AAdGiBqWq8HSH5zdw32JfAdvltGzV3-Jw8RoecrDnIYfzS47VA9kAhu93ZaaS9FcAK-76StC339icMm4zScs3biFGR_rQWaFVzRIZhQ7hWa59FYQJFZajggyDsK2_-LGGC3IW0A6eW3U69tVrBDUzYkG19adbR-UD2plhm6_NMGbyJMgkwlTBTiyzZJdki0tvw9wazSqqkZAgvNq8yaCDjm4SqfFv1co5hJKZOuPuCIkBuQ_htXYVoUNERGRDZVM6xqFCPAmMUAG3tMrsOfYbJwtDFJcwTYVRTXchLCs9MyycpleDA-ER_-FQtf7VdKAjW9p-e0wfNLzh0NSpBTMTu7R/p.jpeg?fv_content=true&size_mode=5',
                        price: '6 €'
                    },
                ]
            }

        default:
            return state
    }
}