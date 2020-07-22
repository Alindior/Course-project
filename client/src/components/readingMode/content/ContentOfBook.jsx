import React from "react";
import { Anchor } from 'antd';

const { Link } = Anchor;

export const ContentOfBook = ({ chapters }) => {
    return (
        <div>
            <Anchor>
                <Link href="#content" title="Описание" />
                {chapters.map((chapter, index) => {
                    return (
                        <Link
                            href={`#${index + 1}`}
                            title={`Глава ${index + 1}. ${chapter.title}`}
                            key={chapter._id}
                        />
                    );
                })}
            </Anchor>
        </div>
    )
}