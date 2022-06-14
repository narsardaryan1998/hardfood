@extends('admin.layout')

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                @if(Session::has('status'))
                    <div class="alert alert-success" role="alert">
                        {{ Session::get('status') }}
                    </div>
                @endif

                <h1>Промокоды</h1>
                <a href="/admin/promocodes/add" class="mt-2 btn btn-success">Добавить промокод</a>

                <div class="row">
                    <div class="mt-4 col-md-12">
                        <div class="table-responsive">
                            <table class="table table-hover table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">Название</th>
                                        <th scope="col">Код</th>
                                        <th scope="col">Скидка руб.</th>
                                        <th scope="col">Использован</th>
                                        <th scope="col">Срок действия</th>
                                        <th scope="col">Для новых</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
{{--                                    @foreach ($promocodes as $promocode)--}}
{{--                                        <tr scope="row"--}}
{{--                                            @if ( $promocode->Die < date('Y-m-d') && !$promocode->Die == null)--}}
{{--                                                class="bg-danger"--}}
{{--                                            @endif--}}
{{--                                        >--}}
{{--                                            <td>{{$promocode->Name}}</td>--}}
{{--                                            <td>{{$promocode->Code}}</td>--}}
{{--                                            <td>{{$promocode->Sale}}</td>--}}
{{--                                            <td>{{$promocode->Count}}</td>--}}
{{--                                            <td>--}}
{{--                                                @if ($promocode->Die)--}}
{{--                                                    {{$promocode->getDate()}}--}}
{{--                                                @else--}}
{{--                                                    ∞--}}
{{--                                                @endif--}}
{{--                                            </td>--}}
{{--                                            <td>--}}
{{--                                                @if ($promocode->onlyNew == 'on')--}}
{{--                                                    <i class="fa fa-check" aria-hidden="true"></i>--}}
{{--                                                @endif--}}
{{--                                            </td>--}}
{{--                                            <td><a href="/admin/promocodes/remove/{{$promocode->ID}}"><i style="color: red" class="fa fa-times"></i></a></td>--}}
{{--                                        </tr>--}}
{{--                                    @endforeach--}}
                                </tbody>
                            </table>
                        </div>
{{--                        {{ $promocodes->links() }}--}}
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
@endsection


