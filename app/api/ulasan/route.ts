import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		console.log("REQ BODY:", body);

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
		console.error("API ERROR:", err);
		return NextResponse.json(
			{ error: "Server Error — cek console" },
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		const reviews = await prisma.review.findMany({
			orderBy: { createdAt: "desc" },
			include: {
				user: true,
			},
		});

		return NextResponse.json(reviews);
	} catch (err) {
		console.error("GET ERROR:", err);
		return NextResponse.json(
			{ error: "Gagal mengambil ulasan" },
			{ status: 500 }
		);
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
