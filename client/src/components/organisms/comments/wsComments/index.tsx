"use client";
import { FC, useEffect, useRef, useState } from "react";
import { CommentBox } from "../commentBox";
import { CommentInput } from "../commentInput";

type TProps = {
	glyphId: string;
};
export const WsComments: FC<TProps> = ({ glyphId }) => {
	// glyphIdをもとにcommentをとってくる（動的）
	// ここで常にcommentを取得してくる
	const [comments, setComments] = useState<string[]>([
		"websocketのコメント1",
		"websocketのコメント2",
	]);
	const scrollLastCommentRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		scrollLastCommentRef?.current?.scrollIntoView();
	}, [comments]);
	return (
		<>
			<CommentBox>
				{comments.map((comment, index) => {
					return (
						<div key={`${comment}-${index}`}>
							<p
								className="border-2 p-2 rounded-md my-2 break-words"
								ref={
									index === comments.length - 1
										? scrollLastCommentRef
										: undefined
								}
							>
								{comment}
							</p>
						</div>
					);
				})}
			</CommentBox>
			<CommentInput comment={comments} setComment={setComments} />
		</>
	);
};