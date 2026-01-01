import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();

		if (!body.userId || !body.pesan || !body.rating) {
			return NextResponse.json(
				{ error: "pesan, rating wajib diisi" },
				{ status: 400 }
			);
		}

		const review = await prisma.review.create({
			data: {
				userId: body.userId,
				pesan: body.pesan,
				rating: Number(body.rating),
			},
		});

		return NextResponse.json(review);
	} catch (err) {
		return NextResponse.json(
			{ error: "Server Error — cek console" },
			{ status: 500 }
		);
	}
}

export async function GET(req: NextRequest) {
	const { searchParams } = req.nextUrl;
	const userId = searchParams.get("userid")?.toString();

	try {
		// jika tidak ada userId, return all reviews
		if (!userId) {
			const reviews = await prisma.review.findMany({
				orderBy: { createdAt: "desc" },
				include: {
					user: true,
				},
			});

			return NextResponse.json(reviews);
		} else {
			// cari review userId tertentu
			const review = await prisma.review.findFirst({
				where: { userId: userId },
				include: {
					user: true,
				},
			});
			return NextResponse.json(review);
		}
	} catch (err) {
		return NextResponse.json({ error: err }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		const { searchParams } = req.nextUrl;
		const id = searchParams.get("id")?.toString();
		const deleteReview = await prisma.review.delete({
			where: {
				id: id as string,
			},
		});
		return NextResponse.json(deleteReview);
	} catch (err) {
		return NextResponse.json(
			{ error: "Gagal menghapus ulasan" },
			{ status: 500 }
		);
	}
}
