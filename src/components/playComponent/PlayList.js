import React from "react";

const PlayList = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12 text-white">
            {/* Section Title */}
            <h2 className="text-4xl font-bold text-center mb-8 text-purple-700">
                Understanding the game
            </h2>

            {/* List of Instructions */}
            <ul className="list-none list-inside space-y-4">
                <li>
                    <strong> <span className="text-purple-700 font-bold text-lg mr-2"> 1. </span> 5by5 Winner Play Room consist of 6 tables :</strong>
                    <ul className="list-disc list-inside ml-2 my-2">
                        <li>Bronze table + Bronze table plus</li>
                        <li>Silver table + Silver table plus</li>
                        <li>Gold table + Gold table plus</li>
                    </ul>
                </li>

                <li>
                    <strong> <span className="text-purple-700 font-bold text-lg mr-2"> 2. </span> Each table consists of 20 cells (4 columns and 5 rows)</strong> with 20 tickets available for purchase.
                    The ticket price and prize money for each table are different, so it is important to read the guide to understand all
                    the strategies for earning a variety of prizes.
                </li>

                <li>
                    <strong> <span className="text-purple-700 font-bold text-lg mr-2"> 3. </span> For each round, you can buy a maximum of 5 tickets for each table.</strong> The more tickets you buy, the
                    higher your chances of winning. Playing with friends allows you to acquire more tickets in the table and increases your
                    chances of winning.
                </li>

                <li>
                    <strong> <span className="text-purple-700 font-bold text-lg mr-2"> 4. </span> Before you play, it is important to know your budget limit for the day or play session</strong> to avoid
                    losing your entire budget. Have an estimated idea of the profit you are targeting.
                </li>

                <li>
                    <strong> <span className="text-purple-700 font-bold text-lg mr-2"> 5. </span> 5by5 Winner is a game of compound winnings, the more you play and win your money increase exponentially!</strong>
                </li>
            </ul>

            {/* Section Title */}
            <h2 className="text-4xl font-bold text-center my-8 text-purple-600">
                Playing the game
            </h2>

            {/* List of Game Steps */}
            <ol className="list-none list-inside  space-y-7">
                <li>
                    <strong> <span className="text-purple-700 font-bold text-lg mr-2"> 1. </span> Choose your table to play, then buy your ticket in the group (column) that you believe will be the winner.</strong>
                    Once all 20 tickets have been sold for the table, they will automatically enter a draw. Each ticket will be assigned a random number from 1 to 20.
                </li>

                <li>
                    <strong> <span className="text-purple-700 font-bold text-lg mr-2"> 2. </span> The column will be shaded fully and 5 Winners in that column will be the winner, after that your prize will be transferred to your wallet automatically.</strong>
                </li>

                <li>
                    <strong> <span className="text-purple-700 font-bold text-lg mr-2"> 3. </span> After the draw is finished, the ticket table will clear all the sold tickets, and new tickets will be available for purchase so you can continue playing the game.</strong>
                </li>

                <li>
                    <strong> <span className="text-purple-700 font-bold text-lg mr-2"> 4. </span> Enjoy your play and play responsibly!</strong>
                </li>
            </ol>
        </div>
    );
};

export default PlayList;
